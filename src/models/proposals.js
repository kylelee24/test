const Sequelize = require('sequelize')

const sequelize = require('./orm/sequelize')

const ProposalsModel = sequelize.define('proposals', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  background: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  cost: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  sprints: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = ProposalsModel
