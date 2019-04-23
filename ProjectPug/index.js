var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index', { title: 'Express และ pug'});
});

app.listen(3000, function(){
    console.log('Express running on port 3000');
});