const Sequelize = require('sequelize')

const config = require('./config')

const sequelize = new Sequelize(
  config.sql.url,
  {
    pool: config.sql.pool,
    ssl: config.sql.ssl,
    dialectOptions: {
      ssl: config.sql.ssl
    },
    logging: config.sql.logging
  }
)

module.exports = sequelize
