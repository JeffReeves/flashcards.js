var express = require('express');
var router = express.Router();

var db = require('../database.js');

//== ROUTES ===================================================================

router.get('/decks/user/:username', function(req, res) {

    var username = req.params.username;

    // select all decks for the username
    var query = 'SELECT decks.id, decks.title ' +
                'FROM decks ' +
                'INNER JOIN users ' +
                'ON decks.userid=users.id ' +
                'WHERE users.username = "' + username + '" ' +
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

router.get('/cards/user/:username', function(req, res) {

    var username = req.params.username;

    // select all cards for a user
    var query = 'SELECT ' +
            'cards.deckid, decks.title, cards.id, cards.front, cards.back, cards.status ' +
            'FROM users ' +
            'INNER JOIN decks ' +
            'ON decks.userid = users.id ' +
            'INNER JOIN cards ' +
            'ON cards.deckid = decks.id ' +
            'WHERE users.username = "' + username + '" ' +
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