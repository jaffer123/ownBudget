const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const jwtMiddleware = require('./middleware/jwt');
const db = require('./config/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const processRouter = require('./routes/process');

const app = express();

// ----- Middleware -----
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// ----- Routes -----
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Protect routes with JWT middleware
app.use('/process', jwtMiddleware, processRouter);

// ----- DB Connection -----
db.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('DB connection error:', err));

// ----- 404 Handler -----
app.use((req, res, next) => {
  next(createError(404));
});

// ----- Error Handler -----
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
