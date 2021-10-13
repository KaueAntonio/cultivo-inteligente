
const Sequelize = require("sequelize")

const sequelize = new Sequelize('cultivo123', 'cultivo123@cultivo', 'cultivo@123',{
    host: 'Cultivo',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}