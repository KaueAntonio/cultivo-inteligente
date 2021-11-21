var database = require("../database/config")



function entrar(email, senha) {
    console.log("ACESSEI O LOGIN MODEL")
    var instrucao = `
    SELECT * FROM usuario JOIN empresa join estufa WHERE email = '${email}' AND senha = '${senha}' and usuario.FkEmpresa = empresa.Idempresa and empresa.idEmpresa = estufa.FkEmpresa;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, fkEmpresa) {
    console.log("ACESSEI O CADASTRO MODEL");
    var instrucao = `
        INSERT INTO usuario (Usuário, email, senha, fkEmpresa) VALUES ('${nome}', '${email}', '${senha}', ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}



module.exports = {
    entrar,
    cadastrar,
};