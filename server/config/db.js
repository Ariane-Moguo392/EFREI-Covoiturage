const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "efrei_covoiturage",
  port: Number(process.env.DB_PORT || 3306)
});

module.exports = db;
