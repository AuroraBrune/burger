var orm = require("../config/orm.js");
//import orm to create functions that will interact with burbersdb

//creating the burger object for our array
var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (vals, cb) {
        orm.create(vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

//export the database functions to the controller burgers_controller.js
module.exports = burger;