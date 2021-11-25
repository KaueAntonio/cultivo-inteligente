var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "cultivo",
    password: "bandtec",
    port: "3306",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;
