const policies = require('./policies')

class HealthCheckService {
  setup (app) {
    this.policies = policies
  }

  async find () {
    return {
      message: 'Looking? Found someone, you have, I would say, hmmm? KYLE IS TESTING'
    }
  }
}

module.exports = app => {
  app.use('healthcheck', new HealthCheckService())
}
