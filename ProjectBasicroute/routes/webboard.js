var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('หน้า Webboard');
});

module.exports = router;