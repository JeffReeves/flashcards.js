var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'flash',
  password        : 'Electronic#Supersonic!',
  database        : 'flashcardsjs'
});

module.exports = pool;