var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sayurloka123",
  database: "kaloz"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
