var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `
    select num_estrela as 'estrelinhas', titulo, mensagem, Usuário, empresa.nome as 'nomeempresa', data_avaliacao, fkUsuario from avaliações join usuario on idUsuario = fkUsuario join empresa on fkEmpresa = idEmpresa;
    `;
    return database.executar(instrucao);
}

function enviar(titulo, estrelas, mensagem, fkUsuario) {
    console.log("ENVIANDO AVALIACOES:");
    let data = new Date;
    var instrucao = `
    insert into Avaliações values (null, '${titulo}', ${estrelas}, '${mensagem}', '${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}', ${fkUsuario});
    `;
    return database.executar(instrucao);
}
module.exports = {
    listar,
    enviar
}
