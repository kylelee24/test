const { auth } = require('./auth')

const configureAppHooks = app => {
  app.hooks({
    before: {
      all: auth
    }
  })
}

module.exports = {
  configureAppHooks
}
