const mysql = require('mysql');

var config =
{
    host: 'cultivo.mysql.database.azure.com',
    user: 'cultivo123@cultivo',
    password: 'cultivo@123',
    database: 'cultivo123',
    port: 3306,
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
    conn.query('DROP TABLE IF EXISTS Cadastro;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped Cadastro table if existed.');
    })
        conn.query('CREATE TABLE Cadastro (idCadastro INT PRIMARY KEY AUTO_INCREMENT, usuario VARCHAR(50), senha VARCHAR(50), email VARCHAR(70));', 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Created Cadastro table.');
    })
    conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};