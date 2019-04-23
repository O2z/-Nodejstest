var express = require('express');
var router = express.Router();

 router.get('/', function (req, res){
    var p = require('../data/data');
    res.send('รหัสสินค้า: ' + p.ProductID + '<br> ชื่อสินค้า: ' + p.ProductName);

}); 

module.exports = router;