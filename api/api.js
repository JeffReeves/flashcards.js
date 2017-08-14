var express = require('express');
var router = express.Router();

var db = require('../database.js');

//== ROUTES ===================================================================

router.get('/decks/:username', function(req, res) {

    // select all decks for the username
    var username = req.params.username;

    var query = 'SELECT decks.id, decks.title ' + 
                'FROM decks INNER JOIN users ON decks.userid=users.id ' +
                'WHERE users.username = "' + username + '";';    

    db.getConnection(function(err, connection){

        connection.query(query, function(error, results, fields) {

            connection.release();

            //var userid = JSON.parse(results[0]);

            //var json = JSON.stringify(userid);

            if(results){
                res.send(results);
            }
                
            if(error){
                res.send(error);
            }
        });
    });
});

router.get('/cards/all', function(req, res) {

    // select all cards
    var query = 'SELECT * FROM cards';

    db.getConnection(function(err, connection){

        connection.query(query, function(error, results, fields) {

            connection.release();

            if(results){
                res.send(results);
            }
                
            if(error){
                res.send(error);
            }
        });
    });
});

router.get('/decks/all', function(req, res){

});

router.post('/decks/all', function(req, res){

});

module.exports = router;