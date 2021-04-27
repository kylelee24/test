const { Service } = require('feathers-sequelize')

const { OfferingsModel } = require('@models')

class OfferingsService extends Service {
  constructor () {
    super({ Model: OfferingsModel })
  }
}

module.exports = app => {
  app.use('offerings', new OfferingsService())
}
