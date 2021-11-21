var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `
    select num_estrelas as 'estrelinhas', titulo, mensagem, Usuário, empresa.nome as 'nomeempresa', dia, mes, ano from avaliacoes join usuario on idUsuario = fkUsuario join empresa on fkEmpresa = idEmpresa;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listar
}
