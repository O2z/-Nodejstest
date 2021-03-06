var express = require('express');
var pug = require('pug');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/login', function(req, res){
   res.redirect('login.html'); 
});
app.post('/', function (req, res){
  var username = req.body.txtUsername;
  var password = req.body.txtPassword; 
  
  var data ='<a href="/">Home</a>'+
  '<br />' +
  'คุณป้อนข้อมูล: ' + username + ' ' + password;
  res.send(data);

});
if(app.get('env') === 'development'){
  app.use(function (err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
     });
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app ;
