var mysql = require('mysql');

var con = mysql.createConnection({
  host: "34.87.88.50",
  user: "root",
  password: "sayurloka123",
  database: "kaloz"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;