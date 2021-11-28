var mysql = require('mysql2');
var sql = require('mssql');

var connection = new sql.ConnectionPool({
    user: "wegrowffee",
    password: "wegrowfe@123",  
    database: "WeGrowffee",
    server: "wegrowffeee.database.windows.net",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {  
        encrypt: true, // for azure
    }
});

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "cultivo",
//     password: "kaue4991",
//     port: "3306"
// });

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;
