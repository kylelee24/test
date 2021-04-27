const { Service } = require('feathers-sequelize')

const { UsersModel } = require('@models')

const policies = require('./policies')

class UsersService extends Service {
  constructor () {
    super({ Model: UsersModel })
    this.policies = policies
  }
}

module.exports = app => {
  app.use('users', new UsersService())
}
