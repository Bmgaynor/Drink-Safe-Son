/**
 * Created by gay9511 on 9/24/2015.
 */
var express = require('express');
var router = express.Router();

var drinks = {
    "Brandy Old Fashion": {
        "name": "Brandy Old Fashion",
        "description": "Sweet Drink for the winter that tastes like home.",
        "ingredients": {
            "alcohol": "brandy",
            "fruit": "cherry"
        }
    },
    "Cosmo": {
        "name": "Cosmo",
        "description":"Girly Drink",
        "ingredients": {
            "alcohol": "vodka",
            "fruit": "lime"
        }
    }


};

/* GET drinks page */
router.get('/', function(req, res, next){


    res.json(drinks);
});

router.get('/:drink', function(req, res, next){
    var drink = req.params.drink;
    console.log(drink);
    res.json(drinks[drink]);
}).post('/:drink', function(req, res){
    var drink = req.params.drink;
    console.log(drink);
});

module.exports = router;