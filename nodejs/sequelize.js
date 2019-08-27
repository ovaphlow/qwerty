const Sequelize = require('sequelize')

const sequelize = new Sequelize('qwerty', 'root', 'ovaph@CDT', {
  dialect: 'mysql',
  host: '127.0.0.1',
  pool: {
    min: 4,
    max: 8
  }
})

module.exports = sequelize