var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const jwt = require('./middleware/jwt');
var logger = require('morgan');
var cors = require('cors');
var db=require('./config/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var processRouter = require('./routes/process');

var parseCookie = function(cookie) {

  var cookies = cookie.split(',')
  var cookies_obj  = {};
  for(var i = 0 ; i < cookies.length ; i++) {
    var key_val_pair = cookies[i].split("=")
    cookies_obj[key_val_pair[0]]=key_val_pair[1];
  }
  return cookies_obj;
}

var app = express();
app.use(cookieParser()); 
app.use('/users1',(req,res,next)=>{
  console.log(req.headers);
  var cookies_obj = {}; 
    cookies_obj  = parseCookie(req.headers.cookie)
  if(cookies_obj.auth_token!=undefined)  {
    jwt.decodeToken(cookies_obj.auth_token,req,res)
  }else {
    console.log("please login first or enter a valid token")
  }
  next();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/process',processRouter);
//db connection

db.authenticate()
.then(data =>{
    console.log("conneted sucessfully");
})
.catch(err =>console.log(err));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
