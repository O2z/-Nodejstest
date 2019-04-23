var express = require('express');
var app = express();

var p = require('./person');
p.Hello();

app.get('/', function(req, res){
    res.send('Hello Express');
});

app.listen(3000, function(){
    console.log('Express running on port 3000');
});