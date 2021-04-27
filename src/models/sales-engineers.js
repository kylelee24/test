const Sequelize = require('sequelize')

const sequelize = require('./orm/sequelize')

const SalesEngineersModel = sequelize.define('salesEngineers', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  }
})

module.exports = SalesEngineersModel
