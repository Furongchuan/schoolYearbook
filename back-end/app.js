var createError = require('http-errors');
var express = require('express');
var expressWs = require('express-ws');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {
  jsonFormat
} = require('./middlewares')
var {
  baseUrl
} = require('./config')
var indexRouter = require('./routes/index');
var classmateRouter = require('./routes/classmate');
var personalRouter = require('./routes/personal')
var socketRouter = require('./routes/socket');
var app = express();
expressWs(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用jsonFormat中间件处理所有请求的数据响应格式为application/json
app.use(baseUrl + '/', jsonFormat)

app.use(baseUrl + '/', indexRouter);
app.use(baseUrl + '/classmate', classmateRouter);
app.use(baseUrl + '/personal', personalRouter);
app.use('/ws',socketRouter)

// app.listen(8080);
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
