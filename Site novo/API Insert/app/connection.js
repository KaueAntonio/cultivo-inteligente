var mysql = require('mysql2');
var sql = require('mysql2');


var connection = mysql.createConnection({
    user: "cultivo123@cultivo",
    password: "cultivo@123",  
    database: "Cultivo",
    server: "cultivo.mysql.database.azure.com",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {  
        encrypt: true, // for azure
    }
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});



module.exports = connection;