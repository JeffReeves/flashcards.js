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
                res.send(results[0]);
            }

            if(error){
                res.send(error);
            }
        });
    });
});

// get a user by username
router.get('/user/:username', function(req, res) {
    
    var username = req.params.username;

    // select all users by username
    var query = 'SELECT users.id, users.username ' +
                'FROM users ' +
                'WHERE users.username = "' + username + '"LIMIT 1 ';

    db.getConnection(function(err, connection){

        connection.query(query, function(error, results, fields) {

            connection.release();

            if(results){
                res.send(results[0]);
            }

            if(error){
                res.send(error);
            }
        });
    });
});


router.get('/stacks/userid/:id', function(req, res) {

    var userId = req.params.id;

    // select all decks for the username
    var query = 'SELECT stacks.id, stacks.name, stacks.userid ' +
                'FROM stacks ' +
                'INNER JOIN users ' +
                'ON stacks.userid=users.id ' +
                'WHERE users.id = "' + userId + '" ' +
                'ORDER BY stacks.id;';

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

router.get('/decks/stackid/:id', function(req, res) {

    var stackId = req.params.id;

    // select all decks for the username
    var query = 'SELECT decks.id, decks.title, decks.stackid ' +
                'FROM decks ' +
                'INNER JOIN stacks ' +
                'ON decks.stackid=stacks.id ' +
                'WHERE stacks.id = "' + stackId + '" ' +
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

router.get('/cards/deckid/:id', function(req, res) {

    var deckId = req.params.id;

    // select all cards for a user
    var query = 'SELECT ' +
            'cards.id, cards.front, cards.back, cards.status, cards.deckid ' +
            'FROM cards ' +
            'INNER JOIN decks ' +
            'ON cards.deckid=decks.id ' +
            'WHERE decks.id = "' + deckId + '" ' +
            'ORDER BY cards.id;';

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


router.post('/create/user', function(req, res){

    var username = req.body.username;
    var password = req.body.password;

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

router.post('/edit/stack', function(req, res){
    
    var username = req.body.username;
    var originalStack = req.body.originalStack;
    var stack = req.body.stack;
    
    // edit the name of the existing stack for the user
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'UPDATE stacks ' +
    'SET stacks.name = "' + stack + '" ' +
    'WHERE stacks.name = "' + originalStack + '" ' +
    'AND stacks.userid = @userid;';    

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

router.post('/edit/deck', function(req, res){
    
    var username = req.body.username;
    var originalStack = req.body.originalStack;
    var originalTitle = req.body.originalTitle;
    var title = req.body.title;
    
    // edit the name of the existing deck for the stack belonging to the user
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + originalStack + '" AND userid = @userid); ' +
    'UPDATE decks ' + 
    'SET decks.title = "' + title + '"' +
    'WHERE decks.title = "' + originalTitle + '"' +
    'AND decks.stackid = @stackid;';

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

router.post('/edit/card', function(req, res){
    
    var username = req.body.username;
    var stack = req.body.stack;
    var deck = req.body.deck;
    var originalFront = req.body.originalFront;
    var originalBack = req.body.originalBack;
    var front = req.body.front;
    var back = req.body.back;

    // create a new card for the deck
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
    'SET @deckid = (SELECT id FROM decks WHERE decks.title = "' + deck + '" AND stackid = @stackid); ' +
    'UPDATE cards ' + 
    'SET cards.front = "' + front + '", cards.back = "' +  back + '" ' +
    'WHERE cards.front = "' + originalFront + '"' +
    'AND cards.deckid = @deckid;';

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


router.post('/create/stack', function(req, res){
    
    // create a new stack if the current stack doesn't exist

    var username = req.body.username;
    var stack = req.body.stack;

    // create a new stack for the user
    var query = 'INSERT IGNORE INTO stacks (userid, name) ' + 
    'SELECT id, "' + stack + '" ' +
    'FROM users WHERE username = "' + username +'";'; 

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

router.post('/create/deck', function(req, res){

    var username = req.body.username;
    var stack = req.body.stack;
    var title = req.body.title;

    // create a new deck for the user and stack
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
    'INSERT IGNORE INTO decks (stackid, title) ' + 
    'VALUES (@stackid, "' + title + '");';

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

router.post('/create/card', function(req, res){
    
    var username = req.body.username;
    var stack = req.body.stack;
    var deck = req.body.deck;
    var front = req.body.front;
    var back = req.body.back;

    // create a new card for a deck -> stack -> user
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
    'SET @deckid = (SELECT id FROM decks WHERE decks.title = "' + deck + '" AND stackid = @stackid); ' +
    'INSERT IGNORE INTO cards (deckid, front, back) ' + 
    'VALUES (@deckid, "' + front + '", "' + back + '");';

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

// this.api.active.post.delete.stack = this.api.active.url + 'delete/stack/';
// this.api.active.post.delete.deck = this.api.active.url + 'delete/deck/';
// this.api.active.post.delete.card = this.api.active.url + 'delete/card/';

router.post('/delete/stack', function(req, res){
    
    var username = req.body.username;
    var stack = req.body.stack;
    
    // edit the name of the existing stack for the user
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'DELETE FROM stacks ' +
    'WHERE stacks.name = "' + stack + '" ' +
    'AND stacks.userid = @userid;';

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

router.post('/delete/deck', function(req, res){
    
    var username = req.body.username;
    var stack = req.body.stack;
    var title = req.body.title;
    
    // edit the name of the existing deck for the stack belonging to the user
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
    'DELETE FROM decks ' + 
    'WHERE decks.title = "' + title + '"' +
    'AND decks.stackid = @stackid;';

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

router.post('/delete/card', function(req, res){
    
    var username = req.body.username;
    var stack = req.body.stack;
    var deck = req.body.deck;
    var front = req.body.front;
    var back = req.body.back;

    // create a new card for the deck
    var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
    'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
    'SET @deckid = (SELECT id FROM decks WHERE decks.title = "' + deck + '" AND stackid = @stackid); ' +
    'DELETE FROM cards ' + 
    'WHERE cards.front = "' + front + '"' +
    'AND cards.deckid = @deckid;';

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
    

module.exports = router;