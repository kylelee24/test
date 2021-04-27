class HealthCheckService {
  async find () {
    return {
      message: 'Ping... ping... is that a whale?'
    }
  }
}

module.exports = app => {
  app.use('healthcheck', new HealthCheckService())
}
