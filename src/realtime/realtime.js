const { isNil } = require('lodash')

const configureRealtime = (app) => {
  app.on('login', (payload, { connection }) => {
    if (isNil(connection)) {
      return
    }

    app.channel('authenticated').join(connection)
  })

  app.on('logout', (payload, { connection }) => {
    if (isNil(connection)) {
      return
    }

    app.channel('authenticated').leave(connection)
  })
}

module.exports = {
  configureRealtime
}
