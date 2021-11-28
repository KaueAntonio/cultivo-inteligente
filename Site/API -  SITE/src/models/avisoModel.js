var database = require("../database/config");

function listar() {
    console.log("LISTANDO:");
    var instrucao = `
        SELECT * FROM [dbo].[usuario];
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listar
}
