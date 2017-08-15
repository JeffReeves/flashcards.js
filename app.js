//== INCLUDES =================================================================

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');


var db = require('./database.js');

//== INIT =====================================================================

var app = express();
var api = require('./api/api.js');

//== MAIN =====================================================================

// server configuration
app.set('ipaddr', '127.0.0.1');
app.set('port', process.env.PORT || 9001);

// view engine
// app.engine('.html', require('ejs').__express);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'html');
app.set('view engine', 'ejs');

// favicon
app.use(favicon(path.join(__dirname, 'favicon.ico')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());

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

app.use('/api', api);

var cards;

// home
app.get('/', function(req, res) {
    
    // get a user if one was passed via domain.com/?user=jeff
    var user = '';
    if(req.query.user){
        user = req.query.user;
    }

    res.render('index', {
        user: user
    });
});

// user/admin menu
app.get('/admin', function(req, res) {

    res.render('index', {
        title: ''
    });
});

// 404 errors
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// set the port to run on
app.listen(app.set('port'));

module.exports = app;