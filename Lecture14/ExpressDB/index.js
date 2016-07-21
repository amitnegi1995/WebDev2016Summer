var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'championswimmer',
  password : 'guzaarish',
  database : 'testdb'
});
 
connection.connect();
 
connection.query('SELECT * FROM new_table', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0]);
});
 
connection.end();
