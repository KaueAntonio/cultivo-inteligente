var database = require("../database/config")



function entrar(email, senha) {
    console.log("ACESSEI O LOGIN MODEL")
    var instrucao = `
    SELECT * FROM [dbo].[usuario] JOIN [dbo].[empresa] on [dbo].[empresa].idEmpresa = [dbo].[usuario].fkEmpresa join [dbo].[estufa] ON [dbo].[empresa].idEmpresa = [dbo].[estufa].fkEmpresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, fkEmpresa) {
    console.log("ACESSEI O CADASTRO MODEL");
    var instrucao = `
        INSERT INTO [dbo].[usuario] (Usuário, email, senha, fkEmpresa) VALUES ('${nome}', '${email}', '${senha}', ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}



module.exports = {
    entrar,
    cadastrar,
};