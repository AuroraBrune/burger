var express = require("express");

var router = express.Router();
//import burger.js to use its database functions
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {   //handlebars object
            burgers: data
        }; 
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    var payload = { 
        burger_name: req.body.burger_name, 
        devoured: req.body.devoured
    }
    burger.create(payload, function (result) {
        res.json({ id: result.insertID });
    
    });
});
    //Function to move burger to devoured list on the right
    //when devoured boolean value changes to true
   /*  router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
            if (result.changedRows == 0) {
                //if no rows were changed, then the ID must not exist so error 404
                return res.status(404).end;
            } else {
                res.status(200).end();
            }
        });
    }); */

    router.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        burger.updateOne({devoured: req.body.devoured},
          condition, function(result) {
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
          });
        });

    module.exports = router;

