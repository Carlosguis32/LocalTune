mod commands;
mod database;
mod utils;

use database::Database;
use tauri::Manager;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            // Obtener directorio de datos de la app
            let app_data_dir = app.path().app_data_dir()
                .expect("Error obteniendo directorio de datos");

            // Ruta a la base de datos SQLite
            let db_path = app_data_dir.join("melira.db");

            println!("📦 Configuración de Base de Datos:");
            println!("   Base de datos: {:?}", db_path);

            // Inicializar base de datos SQLite
            let db = Database::new(db_path)
                .expect("Error inicializando base de datos");

            // Registrar la base de datos como estado global
            app.manage(db);

            println!("✓ Aplicación lista");

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            // Audio
            commands::get_audio_paths,
            commands::get_audio_files_in_folder,
            commands::get_all_local_audio_files,
            commands::get_audio_metadata,
            commands::save_audio_path,
            commands::delete_audio_path,
            commands::write_audio_metadata,
            commands::scan_folder,
            commands::file_exists,

            // Settings
            commands::get_settings,
            commands::save_settings,

            // Spotify Auth
            commands::get_spotify_settings,
            commands::save_spotify_settings,
            commands::exchange_spotify_code,
            commands::refresh_spotify_token,
            commands::logout_spotify,
            
            // Spotify Playlists
            commands::get_spotify_playlists,
            commands::get_spotify_playlist_tracks,
            commands::create_spotify_playlist,
            commands::add_tracks_to_spotify_playlist,
            commands::remove_tracks_from_spotify_playlist,
            commands::delete_spotify_playlist,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
