const mysql = require('mysql');

var config =
{
    host: 'cultivo.mysql.database.azure.com',
    user: 'cultivo123@cultivo',
    password: 'cultivo@123',
    database: 'cultivo123',
    port: 3000,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
           queryDatabase();
    }
});

function queryDatabase(){
    conn.query('INSERT INTO Cadastro (usuario, senha, email) VALUES (?, ?, ?);', [], 
            function (err, results, fields) {
                if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};