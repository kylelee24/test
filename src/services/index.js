const paths = [
  'auth/authentication',
  'auth/privileges',
  'bread/clients',
  'bread/engineers',
  'bread/offerings',
  'bread/proposals',
  'bread/sales-engineers',
  'bread/users',
  'bread/wizards',
  'views/profile',
  'instrumentation/healthcheck'
]

const configureServices = app => paths.forEach(
  path => app.configure(require(`./${path}`))
)

module.exports = {
  configureServices
}
