const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'blog.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erreur connexion SQLite :', err.message);
  } else {
    console.log('Connecté à SQLite');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titre TEXT NOT NULL,
      contenu TEXT NOT NULL,
      auteur TEXT NOT NULL,
      date TEXT NOT NULL,
      categorie TEXT NOT NULL,
      tags TEXT
    )
  `);
});

module.exports = db;
