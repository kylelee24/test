const Sequelize = require('sequelize')

const sequelize = require('./orm/sequelize')

const OfferingsModel = sequelize.define('offerings', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  cost: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  sprints: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = OfferingsModel
