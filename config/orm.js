const connection = require('./connection.js');

var orm = {
    select: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}
//methods to retrieve and store data in burger_db
//selectAll() selectOne() updateOn
orm.selectAll("")





module.exports = orm;