var express = require('express');
var router = express.Router();

var db = require('../database.js');

db.getConnection(function(err, connection){

  // Use the connection
  connection.query('SELECT * FROM cards', function (error, results, fields) {

    if(results){
        console.log('[DEBUG] results: ', results);
    }
    
    // And done with the connection.
    connection.release();

    // Handle error after the release.
    if (error) throw error;
  });
});

//== ROUTES ===================================================================

router.get('/test', function(req, res){

});

router.get('/decks/all', function(req, res){

});

router.post('/decks/all', function(req, res){

});

module.exports = router;