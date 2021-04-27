const Sequelize = require('sequelize')

const sequelize = require('./orm/sequelize')

const ClientsModel = sequelize.define('clients', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = ClientsModel
