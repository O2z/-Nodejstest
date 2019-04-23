var express = require('express');
var pug = require('pug')
var path = require('path');
var app = express();

var index = require('./routes/index');
var webboard = require('./routes/webboard');
var products = require('./routes/products');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/Webboard', webboard);
app.use('/Products', products);

app.listen(4000, function () {
    console.log('Express running on port 4000');
}); 