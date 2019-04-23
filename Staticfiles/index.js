var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('Hello Express');
});

app.get('/Products', function(req, res){
    res.redirect('products.html');
});

app.listen(3000, function(){
    console.log('Express running on port 3000');
});