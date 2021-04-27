require('module-alias/register')

const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const primus = require('@feathersjs/primus')
const configuration = require('@feathersjs/configuration')
const cors = require('cors')

const { configureAppHooks } = require('@hooks')
const { configureServices } = require('@services')
const { configureRealtime } = require('@realtime')

const app = express(feathers())

app.use(cors())

app.configure(configuration())
app.configure(express.rest())
app.configure(primus({ transformer: 'websockets' }))

app.use(express.json())

app.configure(configureServices)
app.configure(configureAppHooks)
app.configure(configureRealtime)

app.use(express.errorHandler())

app.hooks({
  error (context) {
    console.error(`Error in '${context.path}' service method '${context.method}'`, context.error.stack)
  }
})

app.listen(app.get('port')).on('listening', () =>
  console.log(`Server listening on port ${app.get('port')}`)
)
