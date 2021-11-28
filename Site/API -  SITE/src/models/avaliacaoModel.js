var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `
    select num_estrelas as 'estrelinhas', titulo, mensagem, Usuário, empresa.nome as 'nomeempresa', dia, mes, ano, fkUsuario from [dbo].[avaliacoes] join usuario on idUsuario = fkUsuario join empresa on fkEmpresa = idEmpresa;
    `;
    return database.executar(instrucao);
}

function enviar(titulo, estrelas, mensagem, fkUsuario) {
    console.log("ENVIANDO AVALIACOES:");
    let data = new Date;
    var instrucao = `
    insert into [dbo].[avaliacoes](titulo, num_estrelas, mensagem, dia, mes, ano, fkUsuario) values ( '${titulo}', ${estrelas}, '${mensagem}', '${data.getDate()}', '${data.getMonth() + 1}', '${data.getFullYear()}', ${fkUsuario});
    `;
    return database.executar(instrucao);
}
module.exports = {
    listar,
    enviar
}
