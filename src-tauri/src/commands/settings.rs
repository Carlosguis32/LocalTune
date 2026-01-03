use tauri::State;
use crate::database::Database;

/// Comando: Obtener la configuración de la app
#[tauri::command]
pub async fn get_settings(
    db: State<'_, Database>
) -> Result<serde_json::Value, String> {
    let conn = db.conn();
    let conn = conn.lock().unwrap();

    let mut stmt = conn
        .prepare("SELECT key, value FROM settings")
        .map_err(|e| e.to_string())?;

    let settings_map: std::collections::HashMap<String, String> = stmt
        .query_map([], |row| {
            Ok((row.get(0)?, row.get(1)?))
        })
        .map_err(|e| e.to_string())?
        .filter_map(|r| r.ok())
        .collect();

    Ok(serde_json::to_value(settings_map).unwrap_or(serde_json::json!({})))
}

/// Comando: Guardar o actualizar configuración de la app
#[tauri::command]
pub async fn save_settings(
    settings_data: serde_json::Value,
    db: State<'_, Database>
) -> Result<serde_json::Value, String> {
    let conn = db.conn();
    let conn = conn.lock().unwrap();

    if let Some(obj) = settings_data.as_object() {
        for (key, value) in obj {
            let value_str = value.to_string();

            conn.execute(
                "INSERT INTO settings (key, value) VALUES (?1, ?2)
                 ON CONFLICT(key) DO UPDATE SET value = ?2, updated_at = CURRENT_TIMESTAMP",
                &[key, &value_str],
            )
            .map_err(|e| format!("Error guardando setting: {}", e))?;
        }
    }

    Ok(serde_json::json!({ "success": true }))
}
