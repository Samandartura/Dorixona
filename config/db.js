const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERJON,
  password: process.env.PASWORD,
  database: process.env.DB
});

module.exports=connection;