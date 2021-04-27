const Sequelize = require('sequelize')

const sequelize = require('./orm/sequelize')

const UsersModel = sequelize.define('users', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  googleId: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = UsersModel
