var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pug = require('pug')
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var forms = require('./routes/forms');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/forms', forms);

app.post('/', function (req, res){
  var firstname = req.body.txtFirstName;
   var lastname = req.body.txtLastName; 
   var fullname = '<a href= "/">Home</a>' +
  '<br />' +
  'Hello : ' + firstname + ' ' + lastname;
  res.send(fullname);
});
module.exports = app;
