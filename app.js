//== INCLUDES =================================================================

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');


//== INIT =====================================================================

var app = express();
var routes = require('./routes/routes.js');


//== MAIN =====================================================================

// server configuration
//app.set('ipaddr', '198.199.119.38');
app.set('ipaddr', '127.0.0.1');
app.set('port', process.env.PORT || 9001);

// favicon
app.use(favicon(path.join(__dirname, 'favicon.ico')));

// define base directory of app
app.use(express.static(__dirname));

// define other directories used by app
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'static')));

// define paths and the directories they connect to
app.use('/styles', express.static(path.join(__dirname + 'static/styles')));
app.use('/scripts', express.static(path.join(__dirname + 'static/scripts')));
app.use('/images', express.static(path.join(__dirname + 'static/images')));


//-- ROUTES -------------------------------------------------------------------

//app.use('/api', api);
app.use('/', routes);

// 404 errors
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// set the port to run on
app.listen(app.set('port'));

module.exports = app;