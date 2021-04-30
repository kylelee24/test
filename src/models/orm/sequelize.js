const Sequelize = require('sequelize')

const config = require('./config')

let ssl
if (config.sql.ssl.enabled === true) {
  ssl = {
    require: config.sql.ssl.require,
    rejectUnauthorized: config.sql.ssl.rejectUnauthorized
  }
}

const sequelize = new Sequelize(
  config.sql.url,
  {
    pool: config.sql.pool,
    dialectOptions: { ssl },
    logging: config.sql.logging
  }
)

module.exports = sequelize
