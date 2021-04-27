const { Service } = require('feathers-sequelize')

const { ClientsModel } = require('@models')

class ClientsService extends Service {
  constructor () {
    super({ Model: ClientsModel })
  }
}

module.exports = app => {
  app.use('clients', new ClientsService())
}
