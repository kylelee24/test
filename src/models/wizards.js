const Sequelize = require('sequelize')

const sequelize = require('./orm/sequelize')

const WizardsModel = sequelize.define('wizards', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  }
})

module.exports = WizardsModel
