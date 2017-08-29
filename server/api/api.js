var express = require('express');
var router = express.Router();

var db = require('../database.js');

//== ROUTES ===================================================================

router.get('/users/:username', function(req, res) {
    
        var username = req.params.username;
    
        // select all users by username
        var query = 'SELECT users.id, users.username ' +
                    'FROM users ' +
                    'WHERE users.username = "' + username + '" ';
    
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

router.get('/decks/userid/:id', function(req, res) {

    var userId = req.params.id;

    // select all decks for the username
    var query = 'SELECT decks.id, decks.title, decks.stack ' +
                'FROM decks ' +
                'INNER JOIN users ' +
                'ON decks.userid=users.id ' +
                'WHERE users.id = "' + userId + '" ' +
                'ORDER BY decks.id;';

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

router.get('/cards/userid/:userid', function(req, res) {

    var userid = req.params.userid;

    // select all cards for a user
    var query = 'SELECT ' +
            'cards.front, cards.back, cards.id, cards.deckid ' +
            'FROM users ' +
            'INNER JOIN decks ' +
            'ON decks.userid = users.id ' +
            'INNER JOIN cards ' +
            'ON cards.deckid = decks.id ' +
            'WHERE users.id = "' + userid + '" ' +
            'ORDER BY decks.id, cards.id;';

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


router.get('/cards/deckid/:deckid', function(req, res) {

    var deckid = req.params.deckid;

    // select all cards for a deck by id
    var query = 'SELECT cards.id, cards.front, cards.back, cards.status ' +
                'FROM cards INNER JOIN decks ON cards.deckid=decks.id ' +
                'WHERE decks.id = ' + deckid + ' ' +
                'ORDER BY cards.id';

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

router.post('/decks/all', function(req, res){

});

module.exports = router;