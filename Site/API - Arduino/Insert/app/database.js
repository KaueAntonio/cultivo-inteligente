var mysql = require("mysql2");
var connection = mysql.createConnection({
<<<<<<< HEAD
    host: "localhost",
    user: "root",
    database: "cultivo",
    password: "bandtec",
    port: "3306",
=======
  host: "localhost",
  user: "root",
  database: "cultivo",
  password: "kaue4991",
  port: "3306",
>>>>>>> b83af16c7f55d06102f45a7766ace00dc27295dd
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Conectado com sucesso!");
});

module.exports = connection;
