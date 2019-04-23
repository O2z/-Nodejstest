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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/forms', forms);

app.get('/login', function(req, res){
 // res.redirect('login.html'); 
  res.sendFile('public/login.html',{ root:__dirname});
  //res.sendFile(__dirname + '/public/login.html');
}); 

app.post('/login', function (req, res){
  var username = req.body.txtUsername;
  var password = req.body.txtPassword; 
  
  console.log("Username: " + username + "\nPassword: " + password);
  res.end("yes");
  
   var data ='<a href="/">Home</a>'+
  '<br />' +
  'คุณป้อนข้อมูล: ' + username + ' ' + password;
   var firstname = req.body.txtFirstName;
   var lastname = req.body.txtLastName; 
   var fullname = '<a href= "/">Home</a>' +
  '<br />' +
  'Hello : ' + firstname + ' ' + lastname;

  res.send(data);
  res.send(fullname);

});
app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


module.exports = app;