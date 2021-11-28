var avaliacaoModel = require("../models/avaliacaoModel");

function listar(req, res) {
    avaliacaoModel.listar()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function enviar(req, res) {

    var titulo = req.body.titulo;
    var estrelas = req.body.nota;
    var mensagem = req.body.mensagem;
    var fkUsuario = req.body.fkUsuario;

    avaliacaoModel.enviar(titulo, estrelas, mensagem, fkUsuario)
    .then(function (resultado) {
        
            res.status(200).json(resultado);
        
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    listar,
    enviar
}