var express = require('express')
var burger = require('../models/burger.js')
var router = express.Router()

//GET Route
router.get("/", (req, res) => {
    //shows all the burgers
    Burger.allBurgers((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// POST routes 
router.post("/api/burgers", (req, res) => {
    var name = req.body.burger_name
    name1 = JSON.stringify(name)
    //adds burger using the name1 param
    burger.addBurger(

        name1,

        (data) => {
            res.redirect('/')
        })
})
//PUT route
router.put('/api/burgers/:id', (req, res) => {
    //uses the id param to updata the burger
    burger.updateBurger(req.params.id, function (result) {



    })
})

module.exports = router