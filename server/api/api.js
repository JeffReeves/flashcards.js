var express = require('express');
var router = express.Router();

var db = require('../database.js');

//== ROUTES ===================================================================

// select exists(select * from users where users.username = "jeff" limit 1) as exists;
router.get('/userexists/:username', function(req, res) {
    
        var username = req.params.username;
    
        // select all users by username
        var query = 'SELECT EXISTS(SELECT * ' +
                    'FROM users ' +
                    'WHERE users.username = "' + username + '"LIMIT 1) ' +
                    'AS userexists';
    
        db.getConnection(function(err, connection){
    
            connection.query(query, function(error, results, fields) {
    
                connection.release();
    
                if(results){
                    // returns [{"userexists":1}] if true
                    // returns [{"userexists":0}] if false
                    res.send(results);
                }
    
                if(error){
                    res.send(error);
                }
            });
        });
    });

// get a user by username
router.get('/users/:username', function(req, res) {
    
        var username = req.params.username;
    
        // select all users by username
        var query = 'SELECT users.id, users.username ' +
                    'FROM users ' +
                    'WHERE users.username = "' + username + '"LIMIT 1 ';
    
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

router.get('/create/user/:username', function(req, res){

    var username = req.params.username;
    var password = 'default';

    var ultimateResults = [];
    var ultimateError = [];

    // insert a new user
    var insertUser = 'INSERT INTO users (username, password) ' + 
    'VALUES ("' + username + '", "' + password + '") ';

    db.getConnection(function(err, connection){
        
        connection.query(insertUser, function(error, results, fields) {

            connection.release();

            // if successful at creating user
            if(results){

                // add results to the ultimate results
                ultimateResults.push(results);

                // create a default stack and deck
                var insertDeck = 'INSERT INTO decks (userid, title, stack) ' +
                'SELECT id, "First Deck", "Default" ' + 
                'FROM users WHERE username = "' + username + '";';

                db.getConnection(function(err, connection){
                    
                    connection.query(insertDeck, function(error, results, fields) {

                        connection.release();

                        // if successful at creating the stack and deck
                        if(results){

                            // add results to the ultimate results
                            ultimateResults.push(results);

                            // create a first card for the user
                            var insertCards = 
                            'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
                            'SET @deckid = (SELECT id FROM decks WHERE userid = @userid AND title = "First Deck"); ' +
                            'INSERT INTO cards (deckid, front, back) ' +
                            'VALUES (@deckid, ' +
                            '"Hover or click on me to flip me over", ' +
                            '"Pretty cool, huh?\n\nNow feel free to add your own decks and cards."' +
                            ');'

                            db.getConnection(function(err, connection){
                                
                                connection.query(insertCards, function(error, results, fields) {
            
                                    connection.release();
            
                                    // if successful at creating the stack and deck
                                    if(results){
                                        // add results to the ultimate results
                                        ultimateResults.push(results);

                                        res.send(ultimateResults);
                                    }
            
                                    if(error){
                                        res.send(error);
                                    }
                                });
                            });
                        }

                        if(error){
                            res.send(error);
                        }
                    });
                });

                // res.send(ultimateResults);
            }

            if(error){
                res.send(error);
            }
        });
    });
});

module.exports = router;