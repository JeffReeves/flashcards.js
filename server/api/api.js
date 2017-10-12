var express = require('express');
var router = express.Router();

var db = require('../database.js');

/* NOTE: NO_BACKSLASH_ESCAPES mode must be enabled to prevent SQL injection

    This can be set in the /etc/my.cnf file by adding:
        [mysqld]
        sql-mode="NO_BACKSLASH_ESCAPES"

    After adding the above to the my.cnf file, restart the MySQL server:
        systemctl restart mariadb

    To check that the mode is enabled:
        $ mariadb -u root -p 
        MariaDB [(none)]> SELECT @@SQL_MODE;

    Alternatively, this can be set per session by adding this query:
        SET @@SQL_MODE = CONCAT(@@SQL_MODE, ',NO_BACKSLASH_ESCAPES');
*/

//== ROUTES ===================================================================

// select exists(select * from users where users.username = "jeff" limit 1) as exists;
router.get('/userexists/:username', function(req, res) {
    
    var username = req.params.username;

    db.getConnection(function(err, connection){

        // select all users by username
        var query = 'SELECT EXISTS(SELECT * ' +
        'FROM users ' +
        'WHERE users.username = "' + username + '" LIMIT 1) ' +
        'AS userexists';

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

    db.getConnection(function(err, connection){

        // select all users by username
        var query = 'SELECT users.id, users.username ' +
        'FROM users ' +
        'WHERE users.username = "' + username + '" LIMIT 1 ';

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

    db.getConnection(function(err, connection){

        // select all decks for the username
        var query = 'SELECT stacks.id, stacks.name, stacks.userid ' +
        'FROM stacks ' +
        'INNER JOIN users ' +
        'ON stacks.userid=users.id ' +
        'WHERE users.id = "' + userId + '" ' +
        'ORDER BY stacks.id;';

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

    db.getConnection(function(err, connection){

        // select all decks for the username
        var query = 'SELECT decks.id, decks.title, decks.stackid ' +
        'FROM decks ' +
        'INNER JOIN stacks ' +
        'ON decks.stackid=stacks.id ' +
        'WHERE stacks.id = "' + stackId + '" ' +
        'ORDER BY decks.id;';

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

    db.getConnection(function(err, connection){

        // select all cards for a user
        var query = 'SELECT ' +
        'cards.id, cards.front, cards.back, cards.status, cards.deckid ' +
        'FROM cards ' +
        'INNER JOIN decks ' +
        'ON cards.deckid=decks.id ' +
        'WHERE decks.id = "' + deckId + '" ' +
        'ORDER BY cards.id;';

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

    db.getConnection(function(err, connection){

        // insert a new user
        var insertUser = 'INSERT INTO users (username, password) ' + 
        'VALUES ("' + username + '", "' + password + '") ';
        
        connection.query(insertUser, function(error, results, fields) {

            connection.release();

            // if successful at creating user
            if(results){

                // add results to the ultimate results
                ultimateResults.push(results);

                db.getConnection(function(err, connection){

                    // create a default stack and deck
                    var insertStack = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
                    'INSERT INTO stacks (userid, name) ' +
                    'VALUES (@userid, "Demo Stack");';
                        
                    connection.query(insertStack, function(error, results, fields) {

                        connection.release();

                        // if successful at creating the stack and deck
                        if(results){

                            // add results to the ultimate results
                            ultimateResults.push(results);

                            db.getConnection(function(err, connection){

                                // create a first card for the user
                                var insertDeck = 
                                'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
                                'SET @stackid = (SELECT id FROM stacks WHERE userid = @userid AND name = "Demo Stack"); ' +
                                'INSERT INTO decks (stackid, title) ' +
                                'VALUES (@stackid, "Demo Deck");';
                                
                                connection.query(insertDeck, function(error, results, fields) {
            
                                    connection.release();
            
                                    // if successful at creating the stack and deck
                                    if(results){

                                        // add results to the ultimate results
                                        ultimateResults.push(results);
            
                                        db.getConnection(function(err, connection){

                                            // create a first card for the user
                                            var insertCards = 
                                            'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
                                            'SET @stackid = (SELECT id FROM stacks WHERE userid = @userid AND name = "Demo Stack"); ' +
                                            'SET @deckid = (SELECT id FROM decks WHERE stackid = @stackid AND title = "Demo Deck"); ' +
                                            'INSERT INTO cards (deckid, front, back) ' +
                                            'VALUES (@deckid, ' +
                                            '"Hover or click on me to flip me over", ' +
                                            '"Pretty cool, huh?\n\nNow feel free to add your own decks and cards."' +
                                            ');'
                                            
                                            connection.query(insertCards, function(error, results, fields) {
                        
                                                connection.release();

                                                // if successful at creating the stack and deck
                                                if(results){

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
});

router.post('/create/userAlt', function(req, res){

    var username = req.body.username;
    var password = req.body.password;

    db.getConnection(function(err, connection){

        // insert a new user
        var query = 'INSERT INTO users (username, password) ' + 
        'VALUES ("' + username + '", "' + password + '") ';
        
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

router.post('/edit/stack', function(req, res){
    
    var username = req.body.username;
    var originalStack = req.body.originalStack;
    var stack = req.body.stack;

    db.getConnection(function(err, connection){

        // edit the name of the existing stack for the user
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'UPDATE stacks ' +
        'SET stacks.name = "' + stack + '" ' +
        'WHERE stacks.name = "' + originalStack + '" ' +
        'AND stacks.userid = @userid;';    

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

    db.getConnection(function(err, connection){

        // edit the name of the existing deck for the stack belonging to the user
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + originalStack + '" AND userid = @userid); ' +
        'UPDATE decks ' + 
        'SET decks.title = "' + title + '"' +
        'WHERE decks.title = "' + originalTitle + '"' +
        'AND decks.stackid = @stackid;';

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

    db.getConnection(function(err, connection){

        // create a new card for the deck
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
        'SET @deckid = (SELECT id FROM decks WHERE decks.title = "' + deck + '" AND stackid = @stackid); ' +
        'UPDATE cards ' + 
        'SET cards.front = "' + front + '", cards.back = "' +  back + '" ' +
        'WHERE cards.front = "' + originalFront + '" ' +
        'AND cards.deckid = @deckid;';

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

    db.getConnection(function(err, connection){

        // create a new stack for the user
        var query = 'INSERT IGNORE INTO stacks (userid, name) ' + 
        'SELECT id, "' + stack + '" ' +
        'FROM users WHERE username = "' + username +'";'; 

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

    db.getConnection(function(err, connection){

        // create a new deck for the user and stack
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
        'INSERT IGNORE INTO decks (stackid, title) ' + 
        'VALUES (@stackid, "' + title + '");';

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

    db.getConnection(function(err, connection){

        // create a new card for a deck -> stack -> user
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
        'SET @deckid = (SELECT id FROM decks WHERE decks.title = "' + deck + '" AND stackid = @stackid); ' +
        'INSERT IGNORE INTO cards (deckid, front, back) ' + 
        'VALUES (@deckid, "' + front + '", "' + back + '");';

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

    db.getConnection(function(err, connection){

        // edit the name of the existing stack for the user
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'DELETE FROM stacks ' +
        'WHERE stacks.name = "' + stack + '" ' +
        'AND stacks.userid = @userid;';

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

    db.getConnection(function(err, connection){

        // edit the name of the existing deck for the stack belonging to the user
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
        'DELETE FROM decks ' + 
        'WHERE decks.title = "' + title + '" ' +
        'AND decks.stackid = @stackid;';

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

    db.getConnection(function(err, connection){

        // create a new card for the deck
        var query = 'SET @userid = (SELECT id FROM users WHERE username  = "' + username + '"); ' +
        'SET @stackid = (SELECT id FROM stacks WHERE stacks.name = "' + stack + '" AND userid = @userid); ' +
        'SET @deckid = (SELECT id FROM decks WHERE decks.title = "' + deck + '" AND stackid = @stackid); ' +
        'DELETE FROM cards ' + 
        'WHERE cards.front = "' + front + '" ' +
        'AND cards.deckid = @deckid;';

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