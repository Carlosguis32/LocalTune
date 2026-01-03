use serde::{Deserialize, Serialize};
use tauri::State;
use crate::database::Database;
use base64::{Engine as _, engine::general_purpose};

/// Estructura para credenciales de Spotify
#[derive(Debug, Serialize, Deserialize)]
pub struct SpotifyCredentials {
    #[serde(rename = "clientId")]
    pub client_id: String,
    #[serde(rename = "clientSecret")]
    pub client_secret: String,
}

/// Respuesta de token de Spotify
#[derive(Debug, Serialize, Deserialize)]
pub struct SpotifyTokenResponse {
    pub access_token: String,
    pub expires_at: i64,
}

/// Respuesta de la API de Spotify al intercambiar código
#[derive(Debug, Deserialize)]
struct SpotifyApiTokenResponse {
    access_token: String,
    refresh_token: Option<String>,
    expires_in: i64,
}

// ============ Estructuras para Playlists de Spotify ============

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyImage {
    pub url: String,
    pub height: Option<u32>,
    pub width: Option<u32>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyOwner {
    pub id: String,
    pub display_name: String,
    pub uri: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyPlaylistTracks {
    pub total: u32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyPlaylist {
    pub id: String,
    pub name: String,
    pub description: Option<String>,
    pub images: Vec<SpotifyImage>,
    pub owner: SpotifyOwner,
    pub public: bool,
    pub collaborative: bool,
    pub tracks: SpotifyPlaylistTracks,
    pub uri: String,
    pub snapshot_id: String,
}

#[derive(Debug, Deserialize)]
struct SpotifyPlaylistsResponse {
    items: Vec<SpotifyPlaylist>,
    total: u32,
    limit: u32,
    offset: u32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyArtist {
    pub id: String,
    pub name: String,
    pub uri: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyAlbum {
    pub id: String,
    pub name: String,
    pub images: Vec<SpotifyImage>,
    pub uri: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyTrack {
    pub id: String,
    pub name: String,
    pub artists: Vec<SpotifyArtist>,
    pub album: SpotifyAlbum,
    pub duration_ms: u32,
    pub uri: String,
    pub is_local: bool,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SpotifyPlaylistTrack {
    pub added_at: String,
    pub track: SpotifyTrack,
}

#[derive(Debug, Deserialize)]
struct SpotifyPlaylistTracksResponse {
    items: Vec<SpotifyPlaylistTrack>,
    total: u32,
    limit: u32,
    offset: u32,
}

/// Comando: Obtener configuración de Spotify
#[tauri::command]
pub async fn get_spotify_settings(
    db: State<'_, Database>
) -> Result<SpotifyCredentials, String> {
    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    let result = conn.query_row(
        "SELECT clientId, clientSecret FROM spotifyAuth WHERE id = 1",
        [],
        |row| {
            Ok(SpotifyCredentials {
                client_id: row.get(0).unwrap_or_default(),
                client_secret: row.get(1).unwrap_or_default(),
            })
        },
    );
    
    Ok(result.unwrap_or(SpotifyCredentials {
        client_id: String::new(),
        client_secret: String::new(),
    }))
}

/// Comando: Guardar configuración de Spotify
#[tauri::command]
pub async fn save_spotify_settings(
    client_id: String,
    client_secret: String,
    db: State<'_, Database>
) -> Result<serde_json::Value, String> {
    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    let redirect_uri = "http://127.0.0.1:3000/auth/spotify/callback";
    
    conn.execute(
        "INSERT INTO spotifyAuth (id, clientId, clientSecret, redirectUri) 
         VALUES (1, ?1, ?2, ?3)
         ON CONFLICT(id) DO UPDATE SET 
            clientId = ?1, 
            clientSecret = ?2, 
            redirectUri = ?3,
            updated_at = CURRENT_TIMESTAMP",
        &[&client_id, &client_secret, &redirect_uri.to_string()],
    )
    .map_err(|e| format!("Error guardando configuración: {}", e))?;
    
    Ok(serde_json::json!({ "success": true }))
}

/// Comando: Intercambiar código de autorización por tokens de Spotify
#[tauri::command]
pub async fn exchange_spotify_code(
    code: String,
    code_verifier: String,
    db: State<'_, Database>
) -> Result<SpotifyTokenResponse, String> {
    // Obtener credenciales dentro de un scope
    let (client_id, client_secret) = {
        let conn = db.conn();
        let conn = conn.lock().unwrap();
        
        conn.query_row(
            "SELECT clientId, clientSecret FROM spotifyAuth WHERE id = 1",
            [],
            |row| Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?)),
        )
        .map_err(|_| "Configuración de Spotify no encontrada".to_string())?
    }; // El lock se libera aquí automáticamente
    
    let redirect_uri = "http://127.0.0.1:3000/auth/spotify/callback";
    let auth = general_purpose::STANDARD.encode(format!("{}:{}", client_id, client_secret));
    
    let client = reqwest::Client::new();
    let params = [
        ("grant_type", "authorization_code"),
        ("code", &code),
        ("redirect_uri", redirect_uri),
        ("code_verifier", &code_verifier),
    ];
    
    let response = client
        .post("https://accounts.spotify.com/api/token")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Authorization", format!("Basic {}", auth))
        .form(&params)
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let token_response: SpotifyApiTokenResponse = response
        .json()
        .await
        .map_err(|e| format!("Error parseando respuesta: {}", e))?;
    
    let expires_at = chrono::Utc::now().timestamp() + token_response.expires_in;
    
    // Guardar tokens dentro de otro scope
    {
        let conn = db.conn();
        let conn = conn.lock().unwrap();
        
        conn.execute(
            "UPDATE spotifyAuth SET 
                accessToken = ?1, 
                refreshToken = ?2, 
                expiresAt = ?3,
                updated_at = CURRENT_TIMESTAMP
             WHERE id = 1",
            &[
                &token_response.access_token,
                &token_response.refresh_token.clone().unwrap_or_default(),
                &expires_at.to_string(),
            ],
        )
        .map_err(|e| format!("Error guardando tokens: {}", e))?;
    }
    
    Ok(SpotifyTokenResponse {
        access_token: token_response.access_token,
        expires_at,
    })
}

/// Comando: Refrescar token de acceso de Spotify
#[tauri::command]
pub async fn refresh_spotify_token(
    db: State<'_, Database>
) -> Result<SpotifyTokenResponse, String> {
    // Obtener credenciales y refresh token dentro de un scope
    let (client_id, client_secret, refresh_token) = {
        let conn = db.conn();
        let conn = conn.lock().unwrap();
        
        conn.query_row(
            "SELECT clientId, clientSecret, refreshToken FROM spotifyAuth WHERE id = 1",
            [],
            |row| Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?, row.get::<_, String>(2)?)),
        )
        .map_err(|_| "Configuración de Spotify no encontrada".to_string())?
    };
    
    let auth = general_purpose::STANDARD.encode(format!("{}:{}", client_id, client_secret));
    
    let client = reqwest::Client::new();
    let params = [
        ("grant_type", "refresh_token"),
        ("refresh_token", &refresh_token),
    ];
    
    let response = client
        .post("https://accounts.spotify.com/api/token")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Authorization", format!("Basic {}", auth))
        .form(&params)
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let token_response: SpotifyApiTokenResponse = response
        .json()
        .await
        .map_err(|e| format!("Error parseando respuesta: {}", e))?;
    
    let expires_at = chrono::Utc::now().timestamp() + token_response.expires_in;
    
    // Guardar tokens dentro de otro scope
    {
        let conn = db.conn();
        let conn = conn.lock().unwrap();
        
        conn.execute(
            "UPDATE spotifyAuth SET 
                accessToken = ?1, 
                expiresAt = ?2,
                updated_at = CURRENT_TIMESTAMP
             WHERE id = 1",
            &[&token_response.access_token, &expires_at.to_string()],
        )
        .map_err(|e| format!("Error guardando tokens: {}", e))?;
    }
    
    Ok(SpotifyTokenResponse {
        access_token: token_response.access_token,
        expires_at,
    })
}

/// Comando: Cerrar sesión de Spotify (limpiar tokens)
#[tauri::command]
pub async fn logout_spotify(
    db: State<'_, Database>
) -> Result<String, String> {
    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    conn.execute(
        "UPDATE spotifyAuth SET 
            accessToken = NULL, 
            refreshToken = NULL, 
            expiresAt = NULL,
            updated_at = CURRENT_TIMESTAMP
         WHERE id = 1",
        [],
    )
    .map_err(|e| format!("Error cerrando sesión: {}", e))?;
    
    Ok("Sesión cerrada exitosamente".to_string())
}

// ============ Comandos para gestión de Playlists ============

/// Función auxiliar: Obtener access token válido
async fn get_valid_access_token(db: &State<'_, Database>) -> Result<String, String> {
    let conn = db.conn();
    let conn = conn.lock().unwrap();
    
    let (access_token, expires_at) = conn.query_row(
        "SELECT accessToken, expiresAt FROM spotifyAuth WHERE id = 1",
        [],
        |row| Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?)),
    )
    .map_err(|_| "No hay sesión activa de Spotify".to_string())?;
    
    let expires_at: i64 = expires_at.parse()
        .map_err(|_| "Error parseando fecha de expiración".to_string())?;
    
    // Verificar si el token está expirado
    if chrono::Utc::now().timestamp() >= expires_at {
        return Err("Token expirado. Por favor, refresca el token".to_string());
    }
    
    Ok(access_token)
}

/// Comando: Obtener todas las playlists del usuario
#[tauri::command]
pub async fn get_spotify_playlists(
    limit: Option<u32>,
    offset: Option<u32>,
    db: State<'_, Database>
) -> Result<Vec<SpotifyPlaylist>, String> {
    let access_token = get_valid_access_token(&db).await?;
    
    let limit = limit.unwrap_or(50);
    let offset = offset.unwrap_or(0);
    
    let client = reqwest::Client::new();
    let url = format!(
        "https://api.spotify.com/v1/me/playlists?limit={}&offset={}",
        limit, offset
    );
    
    let response = client
        .get(&url)
        .header("Authorization", format!("Bearer {}", access_token))
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let playlists_response: SpotifyPlaylistsResponse = response
        .json()
        .await
        .map_err(|e| format!("Error parseando respuesta: {}", e))?;
    
    Ok(playlists_response.items)
}

/// Comando: Obtener las canciones de una playlist
#[tauri::command]
pub async fn get_spotify_playlist_tracks(
    playlist_id: String,
    limit: Option<u32>,
    offset: Option<u32>,
    db: State<'_, Database>
) -> Result<Vec<SpotifyPlaylistTrack>, String> {
    let access_token = get_valid_access_token(&db).await?;
    
    let limit = limit.unwrap_or(100);
    let offset = offset.unwrap_or(0);
    
    let client = reqwest::Client::new();
    let url = format!(
        "https://api.spotify.com/v1/playlists/{}/tracks?limit={}&offset={}",
        playlist_id, limit, offset
    );
    
    let response = client
        .get(&url)
        .header("Authorization", format!("Bearer {}", access_token))
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let tracks_response: SpotifyPlaylistTracksResponse = response
        .json()
        .await
        .map_err(|e| format!("Error parseando respuesta: {}", e))?;
    
    Ok(tracks_response.items)
}

/// Comando: Crear una nueva playlist
#[tauri::command]
pub async fn create_spotify_playlist(
    name: String,
    description: Option<String>,
    public: Option<bool>,
    db: State<'_, Database>
) -> Result<SpotifyPlaylist, String> {
    let access_token = get_valid_access_token(&db).await?;
    
    // Primero necesitamos obtener el user_id
    let client = reqwest::Client::new();
    let user_response = client
        .get("https://api.spotify.com/v1/me")
        .header("Authorization", format!("Bearer {}", access_token))
        .send()
        .await
        .map_err(|e| format!("Error obteniendo usuario: {}", e))?;
    
    if !user_response.status().is_success() {
        let error_text = user_response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let user_data: serde_json::Value = user_response
        .json()
        .await
        .map_err(|e| format!("Error parseando usuario: {}", e))?;
    
    let user_id = user_data["id"]
        .as_str()
        .ok_or("No se pudo obtener el ID de usuario")?;
    
    // Crear la playlist
    let url = format!("https://api.spotify.com/v1/users/{}/playlists", user_id);
    
    let body = serde_json::json!({
        "name": name,
        "description": description.unwrap_or_default(),
        "public": public.unwrap_or(true)
    });
    
    let response = client
        .post(&url)
        .header("Authorization", format!("Bearer {}", access_token))
        .header("Content-Type", "application/json")
        .json(&body)
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let playlist: SpotifyPlaylist = response
        .json()
        .await
        .map_err(|e| format!("Error parseando respuesta: {}", e))?;
    
    Ok(playlist)
}

/// Comando: Agregar canciones a una playlist
#[tauri::command]
pub async fn add_tracks_to_spotify_playlist(
    playlist_id: String,
    track_uris: Vec<String>,
    position: Option<u32>,
    db: State<'_, Database>
) -> Result<String, String> {
    let access_token = get_valid_access_token(&db).await?;
    
    let url = format!("https://api.spotify.com/v1/playlists/{}/tracks", playlist_id);
    
    let mut body = serde_json::json!({
        "uris": track_uris
    });
    
    if let Some(pos) = position {
        body["position"] = serde_json::json!(pos);
    }
    
    let client = reqwest::Client::new();
    let response = client
        .post(&url)
        .header("Authorization", format!("Bearer {}", access_token))
        .header("Content-Type", "application/json")
        .json(&body)
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let result: serde_json::Value = response
        .json()
        .await
        .map_err(|e| format!("Error parseando respuesta: {}", e))?;
    
    Ok(result["snapshot_id"].as_str().unwrap_or("").to_string())
}

/// Comando: Eliminar canciones de una playlist
#[tauri::command]
pub async fn remove_tracks_from_spotify_playlist(
    playlist_id: String,
    track_uris: Vec<String>,
    snapshot_id: Option<String>,
    db: State<'_, Database>
) -> Result<String, String> {
    let access_token = get_valid_access_token(&db).await?;
    
    let url = format!("https://api.spotify.com/v1/playlists/{}/tracks", playlist_id);
    
    let tracks: Vec<serde_json::Value> = track_uris
        .iter()
        .map(|uri| serde_json::json!({ "uri": uri }))
        .collect();
    
    let mut body = serde_json::json!({
        "tracks": tracks
    });
    
    if let Some(snapshot) = snapshot_id {
        body["snapshot_id"] = serde_json::json!(snapshot);
    }
    
    let client = reqwest::Client::new();
    let response = client
        .delete(&url)
        .header("Authorization", format!("Bearer {}", access_token))
        .header("Content-Type", "application/json")
        .json(&body)
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    let result: serde_json::Value = response
        .json()
        .await
        .map_err(|e| format!("Error parseando respuesta: {}", e))?;
    
    Ok(result["snapshot_id"].as_str().unwrap_or("").to_string())
}

/// Comando: Eliminar una playlist
#[tauri::command]
pub async fn delete_spotify_playlist(
    playlist_id: String,
    db: State<'_, Database>
) -> Result<String, String> {
    let access_token = get_valid_access_token(&db).await?;
    
    let url = format!("https://api.spotify.com/v1/playlists/{}/followers", playlist_id);
    
    let client = reqwest::Client::new();
    let response = client
        .delete(&url)
        .header("Authorization", format!("Bearer {}", access_token))
        .send()
        .await
        .map_err(|e| format!("Error en petición a Spotify: {}", e))?;
    
    if !response.status().is_success() {
        let error_text = response.text().await.unwrap_or_default();
        return Err(format!("Error de Spotify API: {}", error_text));
    }
    
    Ok(format!("Playlist {} eliminada exitosamente", playlist_id))
}
