var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var c = require('../data/data');
    res.send('ผลบวก: '+ c.Add(100,300));
});

module.exports = router; 