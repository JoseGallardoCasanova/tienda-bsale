const mysql = require("mysql");
require("dotenv").config({path: '.env'})
//conexion base de datos
const connection = mysql.createConnection({
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_NOMBRE,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection
