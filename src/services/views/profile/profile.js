const policies = require('./policies')

class ProfileService {
  setup (app) {
    this.app = app
    this.policies = policies
  }

  async find ({ user }) {
    return user
  }
}

module.exports = app => {
  app.use('profile', new ProfileService())
}
