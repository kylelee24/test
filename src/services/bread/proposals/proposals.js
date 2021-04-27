const { Service } = require('feathers-sequelize')

const { ProposalsModel } = require('@models')

class ProposalsService extends Service {
  constructor () {
    super({ Model: ProposalsModel })
  }
}

module.exports = app => {
  app.use('proposals', new ProposalsService())
}
