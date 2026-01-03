use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use tauri::State;
use crate::database::Database;
use crate::utils::{read_audio_metadata, read_platform_ids, write_platform_ids, is_supported_audio_file, AudioMetadata};

/// Estructura de respuesta para rutas de audio
#[derive(Debug, Serialize, Deserialize)]
pub struct AudioPath {
    pub id: String,
    pub path: String,
}

/// Comando: Obtener todas las rutas de audio
#[tauri::command]
pub async fn get_audio_paths(
    db: State<'_, Database>
) -> Result<Vec<String>, String> {
    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    let mut stmt = conn
        .prepare("SELECT path FROM audioPath ORDER BY created_at DESC")
        .map_err(|e| e.to_string())?;
    
    let paths = stmt
        .query_map([], |row| row.get(0))
        .map_err(|e| e.to_string())?
        .filter_map(|r| r.ok())
        .collect();
    
    Ok(paths)
}

/// Comando: Obtener archivos de audio en una carpeta
#[tauri::command]
pub async fn get_audio_files_in_folder(folder: String) -> Result<Vec<String>, String> {
    let entries = fs::read_dir(&folder)
        .map_err(|e| format!("Error leyendo carpeta: {}", e))?;

    let mut audio_files = Vec::new();

    for entry in entries {
        if let Ok(entry) = entry {
            if let Ok(file_name) = entry.file_name().into_string() {
                let file_path = format!("{}\\{}", folder, file_name);
                
                if is_supported_audio_file(&file_path) {
                    audio_files.push(file_name);
                }
            }
        }
    }

    Ok(audio_files)
}

/// Comando: Obtener TODOS los archivos de audio de TODOS los paths guardados
#[tauri::command]
pub async fn get_all_local_audio_files(
    db: State<'_, Database>
) -> Result<Vec<AudioMetadata>, String> {
    // Obtener todos los paths guardados
    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    let mut stmt = conn
        .prepare("SELECT path FROM audioPath ORDER BY created_at DESC")
        .map_err(|e| e.to_string())?;
    
    let paths: Vec<String> = stmt
        .query_map([], |row| row.get(0))
        .map_err(|e| e.to_string())?
        .filter_map(|r| r.ok())
        .collect();
    
    drop(stmt);
    drop(conn);

    let mut all_audio_files = Vec::new();

    // Escanear cada path
    for folder in paths {
        if let Ok(entries) = fs::read_dir(&folder) {
            for entry in entries {
                if let Ok(entry) = entry {
                    let path = entry.path();
                    if let Some(path_str) = path.to_str() {
                        if is_supported_audio_file(path_str) {
                            // Leer metadata de cada archivo
                            if let Ok(metadata) = read_audio_metadata(path_str) {
                                all_audio_files.push(metadata);
                            }
                        }
                    }
                }
            }
        }
    }

    Ok(all_audio_files)
}

/// Comando: Obtener metadata de un archivo de audio
#[tauri::command]
pub async fn get_audio_metadata(path: String) -> Result<AudioMetadata, String> {
    read_audio_metadata(&path)
}

/// Comando: Guardar una nueva ruta de audio en la base de datos
#[tauri::command]
pub async fn save_audio_path(
    path: String,
    db: State<'_, Database>
) -> Result<String, String> {
    if path.trim().is_empty() {
        return Err("La ruta no puede estar vacía".to_string());
    }

    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    // Generar ID único
    let id = format!("ap_{}", chrono::Utc::now().timestamp_millis());
    
    conn.execute(
        "INSERT INTO audioPath (id, path) VALUES (?1, ?2)",
        &[&id, &path.trim().to_string()],
    )
    .map_err(|e| format!("Error guardando ruta: {}", e))?;

    Ok("Ruta de audio guardada exitosamente".to_string())
}

/// Comando: Eliminar una ruta de audio
#[tauri::command]
pub async fn delete_audio_path(
    path: String,
    db: State<'_, Database>
) -> Result<String, String> {
    if path.trim().is_empty() {
        return Err("La ruta no puede estar vacía".to_string());
    }

    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    let rows_affected = conn.execute(
        "DELETE FROM audioPath WHERE path = ?1",
        &[&path.trim()],
    )
    .map_err(|e| format!("Error eliminando ruta: {}", e))?;

    if rows_affected == 0 {
        return Err("Ruta no encontrada".to_string());
    }

    Ok("Ruta de audio eliminada exitosamente".to_string())
}

/// Comando: Escribir Platform IDs en metadata de archivo
#[tauri::command]
pub async fn write_audio_metadata(
    path: String,
    platform_ids: HashMap<String, String>
) -> Result<String, String> {
    let success = write_platform_ids(&path, &platform_ids)?;
    
    if success {
        Ok("Platform IDs escritos exitosamente".to_string())
    } else {
        Err("No se pudieron escribir los Platform IDs (formato no soportado)".to_string())
    }
}

/// Comando: Escanear carpeta y guardar archivos en la base de datos
#[tauri::command]
pub async fn scan_folder(
    folder: String,
    db: State<'_, Database>
) -> Result<ScanFolderResponse, String> {
    let entries = fs::read_dir(&folder)
        .map_err(|e| format!("Error leyendo carpeta: {}", e))?;

    let mut audio_files = Vec::new();
    let mut saved_count = 0;
    let mut errors = Vec::new();

    // Recolectar archivos de audio
    for entry in entries {
        if let Ok(entry) = entry {
            let path = entry.path();
            if let Some(path_str) = path.to_str() {
                if is_supported_audio_file(path_str) {
                    audio_files.push(path_str.to_string());
                }
            }
        }
    }

    let total_files = audio_files.len();

    let conn = db.conn();
    let conn = conn.lock().unwrap();

    // Procesar cada archivo
    for file_path in audio_files {
        match read_platform_ids(&file_path) {
            Ok(platform_ids) => {
                let spotify_id = platform_ids.get("spotify").cloned();
                let id = format!("af_{}", chrono::Utc::now().timestamp_millis());
                
                let result = conn.execute(
                    "INSERT INTO audioFile (id, path, spotifyId) VALUES (?1, ?2, ?3)",
                    &[&id, &file_path, &spotify_id.unwrap_or_default()],
                );

                match result {
                    Ok(_) => saved_count += 1,
                    Err(e) => errors.push(format!("Error guardando {}: {}", file_path, e)),
                }
            }
            Err(e) => {
                errors.push(format!("Error leyendo metadata de {}: {}", file_path, e));
            }
        }
    }

    Ok(ScanFolderResponse {
        total_files,
        saved_count,
        errors,
    })
}

/// Respuesta del comando scan_folder
#[derive(Debug, Serialize)]
pub struct ScanFolderResponse {
    pub total_files: usize,
    pub saved_count: usize,
    pub errors: Vec<String>,
}

/// Comando: Verificar si un archivo existe
#[tauri::command]
pub async fn file_exists(path: String) -> Result<bool, String> {
    Ok(std::path::Path::new(&path).exists())
}
