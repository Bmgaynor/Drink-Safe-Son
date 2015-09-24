var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}).get('/Drinks', function(req, res, next){
  res.json({
    "name":"Brandy Old Fashion",
    "description":"Sweet Drink for the winter that tastes like home.",
    "ingredients":{
      "alcohol":"brandy",
      "fruit":"cherry"
    }
  })
});

module.exports = router;
