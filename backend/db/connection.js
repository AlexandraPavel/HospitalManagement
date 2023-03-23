require('dotenv').config();
var fs = require('fs');
var mysql = require('mysql');

var conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: process.env.DEV_PORT,
  ssl:{
      ca:fs.readFileSync(process.env.CA),
      rejectUnauthorized: true
  }
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = conn;