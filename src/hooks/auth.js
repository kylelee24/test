const { Forbidden } = require('@feathersjs/errors')
const { authenticate } = require('@feathersjs/authentication')
const { isNil, defaultTo, isArray, castArray, get } = require('lodash')

const { getAbilities } = require('./casl')

const forbidden = new Forbidden('Ah ah ah. You didn\'t say the magic word!')

const throwAuthError = (authError) => {
  if (isNil(authError)) {
    throw forbidden
  }
  throw authError
}

const throwUnlessCan = (abilities, method, data, authError) => (
  castArray(data).forEach(
    item => {
      if (abilities.cannot(method, item)) {
        throwAuthError(authError)
      }
    })
)

const isInternalCall = context => (
  isNil(context.params.provider) || context.path === 'authentication'
)

const isWizard = privileges => (
  get(privileges, 'wizard') === true
)

const noAbilitiesForService = (abilities, context) => (
  abilities.rulesFor(context.method).length === 0
)

const extractPolicyConfiguration = (app, service) => {
  if (isNil(service.policies)) {
    return { policies: [], skip: true, resolver: service }
  }

  if (isArray(service.policies)) {
    return { policies: service.policies, skip: true, resolver: service }
  }

  return {
    policies: service.policies.policies,
    resolver: app.service(service.policies.resolver),
    skip: defaultTo(service.policies.skip, true)
  }
}

const auth = async context => {
  const { app, service, method } = context

  if (isInternalCall(context)) {
    return context
  }

  let authError
  try {
    await authenticate('jwt')(context)
  } catch (error) {
    authError = error
  }

  const privileges = get(context, 'params.user.privileges')

  if (isWizard(privileges)) {
    return context
  }

  const { policies, skip, resolver } = extractPolicyConfiguration(app, service)
  const abilities = getAbilities(policies, privileges)

  if (noAbilitiesForService(abilities, context)) {
    throwAuthError(authError)
  }

  if (method === 'create') {
    throwUnlessCan(abilities, method, context.data, authError)
    return context
  }

  const result = isNil(context.id)
    ? await resolver.find({ ...context.params, provider: null })
    : await resolver.get(context.id, { ...context.params, provider: null })

  throwUnlessCan(abilities, method, result, authError)

  if (skip === true && (method === 'find' || method === 'get')) {
    context.result = result
  }

  return context
}

module.exports = {
  auth
}
