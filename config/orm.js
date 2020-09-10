// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// In below helper function loops through and creates an array of question marks 
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Salsa Burger=> 'Salsa Burger')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {burger_name: 'Salsa Burger'} => ["burger_name='Salsa Burger'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function (vals, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ( ?, ?)"
    console.log("VALUES ", vals);

    connection.query(queryString, [vals.burger_name, parseInt(vals.devoured)], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);

    });

  },
  // An example of objColVals would be {burger_name: burger devoured: true}
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;


    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model burger.js).
module.exports = orm;
