var objectAssign = require('object-assign')

/**
 * FactorIn
 * Return a factory function that returns an object inherited from `FactorIn`
 * @param {Object} actions - an object of base key/values to be inherited
 * @return {Function} a named 'Factory' function that applies it's 'args' to 'actions'
 * and returns the object
 */

function FactorIn (actions) {
  if (typeof (actions) !== 'object') return
  return function Factory (args) {
    return objectAssign(
      {},
      actions,
      args
    )
  }
}

/**
 * Exports
 * Return 'FactorIn' curried by Ramda
 */

module.exports = FactorIn
