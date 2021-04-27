const Sequelize = require('sequelize')

const sequelize = require('./orm/sequelize')

const EngineersModel = sequelize.define('engineers', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  }
})

module.exports = EngineersModel
