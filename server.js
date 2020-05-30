const express = require('express');
const db = require('./db')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const DB_USER = process.env.PGUSER;
const DB_HOST = process.env.PGHOST;
const DB_DATABASE = process.env.PGDATABASE;
const DB_PASSWORD = process.env.PGPASSWORD;

const pool = new Pool()

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Database: User: ${DB_USER}, Host: ${DB_HOST}, Database: ${DB_DATABASE}, Password: ${DB_PASSWORD}`);
});

app.get('/test', async (req, res) => {
  const results = await db.query('SELECT NOW()')
  res.send(JSON.stringify(results, null, 4));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Database: User: ${DB_USER}, Host: ${DB_HOST}, Database: ${DB_DATABASE}, Password: ${DB_PASSWORD}`)