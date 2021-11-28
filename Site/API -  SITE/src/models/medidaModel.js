var database = require("../database/config");


function listar() {
    console.log("LISTANDO DADOS:");
    var instrucao = `
        SELECT * FROM [dbo].[dadosSensor];
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar
}