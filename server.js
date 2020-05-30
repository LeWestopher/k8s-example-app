const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const DB_USER = process.env.POSTGRES_USER;
const DB_HOST = process.env.POSTGRES_HOST;
const DB_DATABASE = process.env.POSTGRES_DB;
const DB_PASSWORD = process.env.POSTGRES_PASSWORD;

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Database: User: ${DB_USER}, Host: ${DB_HOST}, Database: ${DB_DATABASE}, Password: ${DB_PASSWORD}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Database: User: ${DB_USER}, Host: ${DB_HOST}, Database: ${DB_DATABASE}, Password: ${DB_PASSWORD}`)