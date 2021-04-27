const { Service } = require('feathers-sequelize')

const { SalesEngineersModel } = require('@models')

class SalesEngineersService extends Service {
  constructor () {
    super({ Model: SalesEngineersModel })
  }
}

module.exports = app => {
  app.use('sales-engineers', new SalesEngineersService())
}
