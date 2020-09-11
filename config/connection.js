var mysql = require('mysql');
//Connecting to mysql workbench to store our database and use the data for our page. 
var connection;

if ( process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: "3571Yellow01$",
    database: "burgers_db"
  });
};


connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;