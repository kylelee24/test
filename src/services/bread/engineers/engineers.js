const { Service } = require('feathers-sequelize')

const { EngineersModel } = require('@models')

class EngineersService extends Service {
  constructor () {
    super({ Model: EngineersModel })
  }
}

module.exports = app => {
  app.use('engineers', new EngineersService())
}
