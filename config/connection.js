var mysql = require('mysql');
//Connecting to mysql workbench to store our database and use the data for our page. 
require('dotenv').config();
var connection;
//.env file added to secure the password 
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;