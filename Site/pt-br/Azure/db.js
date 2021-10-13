
const Sequelize = require("sequelize")

const sequelize = new Sequelize('cultivo123', 'cultivo123@cultivo', 'cultivo@123',{
    host: 'cultivo.mysql.database.azure.com',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}