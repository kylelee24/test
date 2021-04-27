const { Service } = require('feathers-sequelize')

const { WizardsModel } = require('@models')

class WizardsService extends Service {
  constructor () {
    super({ Model: WizardsModel })
  }
}

module.exports = app => {
  app.use('wizards', new WizardsService())
}
