var express = require('express');
var router = express.Router();

var db = require('../database.js');

//== ROUTES ===================================================================

router.get('/test', function(req, res){

    db.getConnection(function(err, connection){

        // Use the connection
        connection.query('SELECT * FROM cards', function (error, results, fields) {

            if(results){
                console.log('[DEBUG] api test results: ', results);
            }
                
            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) throw error;
        });
    });
});

router.get('/cards/all', function(req, res) {

    // select all cards
    var query = 'SELECT * FROM cards';

    db.getConnection(function(err, connection){

        connection.query(query, function (error, results, fields) {

            if(results){
                res.send(results);
            }
                
            connection.release();

            if (error){
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