use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::Path;
use id3::TagLike;  // Trait necesario para usar métodos de Tag
use lofty::file::{TaggedFileExt, AudioFile};  // Traits necesarios para TaggedFile
use lofty::tag::Accessor;  // Trait necesario para acceder a title, artist, album

/// Estructura para almacenar metadata de audio
/// 
/// #[derive(Debug, Clone, Serialize, Deserialize)] es un macro que automáticamente
/// implementa traits (interfaces) útiles:
/// - Debug: para imprimir con println!("{:?}", metadata)
/// - Clone: para duplicar el struct
/// - Serialize/Deserialize: para convertir a/desde JSON
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AudioMetadata {
    pub path: String,
    pub title: Option<String>,
    pub artist: Option<String>,
    pub album: Option<String>,
    pub duration: Option<u64>,
    /// Las imágenes se almacenan como bytes (Vec<u8> es como Uint8Array)
    pub album_cover: Option<Vec<u8>>,
    /// IDs de plataformas (spotify, youtube, etc.)
    pub platform_ids: HashMap<String, String>,
}

/// Lee los Platform IDs de los metadatos de un archivo de audio
/// 
/// En Rust, los errores se manejan con Result<T, E>:
/// - Ok(valor) si todo sale bien
/// - Err(mensaje) si hay un error
/// 
/// El operador '?' es como un try-catch automático que propaga errores
pub fn read_platform_ids(file_path: &str) -> Result<HashMap<String, String>, String> {
    // Path es un tipo de Rust para manejar rutas de archivos
    let path = Path::new(file_path);
    
    // Obtener la extensión del archivo
    let extension = path
        .extension()
        .and_then(|s| s.to_str())
        .unwrap_or("")
        .to_lowercase();

    let mut platform_ids = HashMap::new();

    // Solo procesamos MP3 por ahora (igual que en Node.js con node-id3)
    if extension == "mp3" {
        // id3::Tag::read_from_path lee los tags ID3 del MP3
        match id3::Tag::read_from_path(path) {
            Ok(tag) => {
                // Iterar sobre los frames TXXX (user-defined text)
                // Estos frames almacenan texto personalizado con una descripción
                for frame in tag.frames() {
                    if let Some(content) = frame.content().extended_text() {
                        // En id3 v1.16, content.description es String, no Option<String>
                        let desc = &content.description;
                        if desc.ends_with("_ID") {
                            // Convertir "SPOTIFY_ID" -> "spotify"
                            let platform = desc
                                .trim_end_matches("_ID")
                                .to_lowercase();
                            
                            platform_ids.insert(platform, content.value.clone());
                        }
                    }
                }
            }
            Err(e) => {
                // Si falla la lectura, retornamos un HashMap vacío en lugar de error
                // Esto es consistente con el comportamiento de Node.js
                eprintln!("Advertencia: No se pudieron leer tags ID3: {}", e);
            }
        }
    }

    Ok(platform_ids)
}

/// Escribe los Platform IDs en los metadatos de un archivo de audio
pub fn write_platform_ids(
    file_path: &str,
    platform_ids: &HashMap<String, String>,
) -> Result<bool, String> {
    let path = Path::new(file_path);
    let extension = path
        .extension()
        .and_then(|s| s.to_str())
        .unwrap_or("")
        .to_lowercase();

    if extension != "mp3" {
        // Si no es MP3, retornamos false (no soportado)
        return Ok(false);
    }

    // Leer los tags existentes
    let mut tag = id3::Tag::read_from_path(path)
        .unwrap_or_else(|_| id3::Tag::new());

    // Primero, eliminar todos los frames TXXX que terminen en _ID
    // (para evitar duplicados)
    tag.remove_extended_text(None, None);

    // Agregar los nuevos Platform IDs como frames TXXX
    for (platform, id) in platform_ids {
        if !id.is_empty() {
            // Crear la descripción en mayúsculas: "spotify" -> "SPOTIFY_ID"
            let description = format!("{}_ID", platform.to_uppercase());
            
            // Agregar el frame TXXX
            tag.add_frame(id3::frame::ExtendedText {
                description,
                value: id.clone(),
            });
        }
    }

    // Escribir los cambios al archivo
    match tag.write_to_path(path, id3::Version::Id3v24) {
        Ok(_) => Ok(true),
        Err(e) => Err(format!("Error escribiendo tags: {}", e)),
    }
}

/// Lee toda la metadata de un archivo de audio (título, artista, álbum, etc.)
/// 
/// Usa la librería 'lofty' que soporta múltiples formatos
/// (equivalente a 'music-metadata' en Node.js)
pub fn read_audio_metadata(file_path: &str) -> Result<AudioMetadata, String> {
    // lofty::read_from_path lee metadata de múltiples formatos
    let tagged_file = lofty::read_from_path(file_path)
        .map_err(|e| format!("Error leyendo archivo: {}", e))?;

    // .primary_tag() obtiene el tag principal del archivo
    let tag = tagged_file
        .primary_tag()
        .or_else(|| tagged_file.first_tag());

    // Obtener duración en milisegundos
    let duration_ms = tagged_file.properties().duration().as_millis() as u64;

    let mut metadata = AudioMetadata {
        path: file_path.to_string(),
        title: None,
        artist: None,
        album: None,
        duration: Some(duration_ms),
        album_cover: None,
        platform_ids: HashMap::new(),
    };

    if let Some(tag) = tag {
        // Cow<'_, str> puede ser convertido a String con .to_string()
        metadata.title = tag.title().map(|s| s.to_string());
        metadata.artist = tag.artist().map(|s| s.to_string());
        metadata.album = tag.album().map(|s| s.to_string());

        // Obtener la primera imagen (cover del álbum)
        if let Some(picture) = tag.pictures().first() {
            // Clonar los bytes de la imagen
            metadata.album_cover = Some(picture.data().to_vec());
        }
    }

    // Leer los Platform IDs por separado (usando la función anterior)
    metadata.platform_ids = read_platform_ids(file_path)?;

    Ok(metadata)
}

/// Constantes para extensiones de archivo soportadas
/// 
/// 'static significa que vive durante toda la ejecución del programa
/// &[&str] es un array inmutable de strings
pub const SUPPORTED_AUDIO_EXTENSIONS: &[&str] = &[".mp3", ".flac", ".wav", ".ogg", ".m4a"];

/// Verifica si un archivo es de audio soportado
pub fn is_supported_audio_file(file_path: &str) -> bool {
    let path = Path::new(file_path);
    
    if let Some(extension) = path.extension().and_then(|s| s.to_str()) {
        let ext = format!(".{}", extension.to_lowercase());
        return SUPPORTED_AUDIO_EXTENSIONS.contains(&ext.as_str());
    }
    
    false
}
