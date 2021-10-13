const db = require('./db')

const Cadastro = db.sequelize.define('Cadastro', {
    usuario: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//cadastro.sync({force: true})

module.exports = Cadastro;