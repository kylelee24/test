class PrivilegesService {
  setup (app) {
    this.app = app
  }

  async get (userId) {
    const [wizards] = await Promise.all([
      await this.app.service('wizards').find({ query: { userId } })
    ])

    return {
      wizard: wizards.length !== 0
    }
  }
}

module.exports = app => {
  app.use('privileges', new PrivilegesService())
}
