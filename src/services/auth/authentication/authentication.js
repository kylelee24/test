const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication')
const { expressOauth, OAuthStrategy } = require('@feathersjs/authentication-oauth')
const { Forbidden } = require('@feathersjs/errors')
const { includes } = require('lodash')

const hasAllowedDomain = (email, allowedDomains) => (
  includes(allowedDomains, email.split('@').pop())
)

const isValidEmail = (email, allowedDomains, verified) => (
  hasAllowedDomain(email, allowedDomains) && verified === true
)

class RadarJWTStrategy extends JWTStrategy {
  async getEntity (id, params) {
    const user = await super.getEntity(id, params)
    const privileges = await this.app.service('privileges').get(user.id)
    return { ...user, privileges }
  }
}

class RadarGoogleStrategy extends OAuthStrategy {
  async getEntity (id, params) {
    const user = await super.getEntity(id, params)
    const privileges = await this.app.service('privileges').get(user.id)
    return { ...user, privileges }
  }

  async getEntityData (profile, entity, params) {
    const { allowedDomains } = this.app.get('authentication')

    if (!isValidEmail(profile.email, allowedDomains, profile.email_verified)) {
      throw new Forbidden('Ah ah ah, you didn\'t say the magic word.')
    }

    const baseData = await super.getEntityData(profile)
    return {
      googleId: baseData.googleId,
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email
    }
  }
}

module.exports = app => {
  const authService = new AuthenticationService(app)

  authService.register('jwt', new RadarJWTStrategy())
  authService.register('google', new RadarGoogleStrategy())

  app.use('/authentication', authService)
  app.configure(expressOauth())
}
