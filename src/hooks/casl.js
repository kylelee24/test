const { Ability } = require('@casl/ability')
const { isNil, filter, reduce } = require('lodash')

const getAbilities = (policies, privileges) => {
  let activePolicies = policies
  const resolvers = []

  if (isNil(privileges)) {
    activePolicies = filter(activePolicies, { authenticated: false })
  }

  const resolvedPolicies = activePolicies.map(
    policy => {
      return ({
        action: policy.methods,
        conditions: reduce(
          policy.conditions,
          (result, value, key) => ({
            [key]: reduce(
              resolvers,
              (result, resolver) => resolver(result),
              value
            )
          }),
          {}
        )
      })
    }
  )

  return new Ability(resolvedPolicies)
}

module.exports = {
  getAbilities
}
