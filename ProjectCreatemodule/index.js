var express = require('express');
var pug = require('pug')
var app = express();


var index = require('./routes/index');
var products = require('./routes/products');


app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', index);
app.use('/products', products);



app.listen(4000, function(){
    console.log('Express running on port 4000');
});