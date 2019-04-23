var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var brand = req.query.brand;
    var model = req.query.model;

    if (brand == undefined || model == undefined){
        res.redirect('productslist.html');
    } else {
        var str = 'ยี่ห้อ: ' + brand + '<br /> สินค้าเด่น: ' + model;
        res.send(str);
    }
});

module.exports = router;
