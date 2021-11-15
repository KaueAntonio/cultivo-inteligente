var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: "cultivo.mysql.database.azure.com",
    user: "cultivo123@cultivo",
    database: "cultivo",
    password: "cultivo@123",
    port: "3306",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;
