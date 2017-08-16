var mysql = require('mysql');

var pool = mysql.createPool({
  host            : 'localhost',
  user            : 'flash',
  password        : 'Electronic#Supersonic!',
  database        : 'flashcardsjs',
  connectionLimit : 10,
  multipleStatements: true
});

module.exports = pool;