use rusqlite::{Connection, Result};
use std::path::PathBuf;
use std::sync::{Arc, Mutex};

/// Cliente SQLite thread-safe
#[derive(Clone)]
pub struct Database {
    conn: Arc<Mutex<Connection>>,
}

impl Database {
    /// Crea una nueva conexión a la base de datos SQLite
    pub fn new(db_path: PathBuf) -> Result<Self> {
        // Crear directorio padre si no existe
        if let Some(parent) = db_path.parent() {
            std::fs::create_dir_all(parent)
                .map_err(|_e| rusqlite::Error::InvalidPath(parent.to_path_buf()))?;
        }

        let conn = Connection::open(&db_path)?;

        // Habilitar claves foráneas
        conn.execute("PRAGMA foreign_keys = ON", [])?;

        let db = Self {
            conn: Arc::new(Mutex::new(conn)),
        };

        // Inicializar esquema
        db.init_schema()?;

        println!("✓ Base de datos SQLite inicializada en: {:?}", db_path);

        Ok(db)
    }

    /// Inicializa el esquema de la base de datos
    fn init_schema(&self) -> Result<()> {
        let conn = self.conn.lock().unwrap();

        // Tabla: settings
        conn.execute(
            "CREATE TABLE IF NOT EXISTS settings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                key TEXT NOT NULL UNIQUE,
                value TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )",
            [],
        )?;

        // Tabla: audioPath (rutas de carpetas con música)
        conn.execute(
            "CREATE TABLE IF NOT EXISTS audioPath (
                id TEXT PRIMARY KEY,
                path TEXT NOT NULL UNIQUE,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )",
            [],
        )?;

        // Tabla: audioFile (archivos de audio escaneados)
        conn.execute(
            "CREATE TABLE IF NOT EXISTS audioFile (
                id TEXT PRIMARY KEY,
                path TEXT NOT NULL UNIQUE,
                filename TEXT,
                title TEXT,
                artist TEXT,
                album TEXT,
                albumCoverImage TEXT,
                spotifyId TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )",
            [],
        )?;

        // Tabla: spotifyAuth
        conn.execute(
            "CREATE TABLE IF NOT EXISTS spotifyAuth (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                clientId TEXT,
                clientSecret TEXT,
                redirectUri TEXT,
                accessToken TEXT,
                refreshToken TEXT,
                expiresAt INTEGER,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )",
            [],
        )?;

        println!("✓ Esquema de base de datos creado/verificado");

        Ok(())
    }

    /// Obtiene la conexión para ejecutar queries
    pub fn conn(&self) -> Arc<Mutex<Connection>> {
        self.conn.clone()
    }
}
