var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "cultivo.mysql.database.azure.com",
    user: "cultivo123@cultivo",
    database: "cultivo",
    password: "cultivo@123",
    port: "3306",
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM dadossensor", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});