const policies = require('./policies')

class HealthCheckService {
  setup (app) {
    this.policies = policies
  }

  async find () {
    return {
      message: 'Kyle: Doing a final test before merge.'
    }
  }
}

module.exports = app => {
  app.use('healthcheck', new HealthCheckService())
}
