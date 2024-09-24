const Database = require('better-sqlite3');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const db = new Database('db.db', { verbose: console.log });

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date_created TEXT DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
