var express = require('express');
var app = express();

app.get('/', function(req, res){
    var myList = '<ul><li>Androind</li><li>IOS</li></ul>';
    res.send(myList);
});

app.get('/arr', function(req, res){
    var arr = ['Androind','IOS','Windows'];
    res.send(arr);
});

app.listen(3000, function(){
    console.log('Express running on port 3000');
});