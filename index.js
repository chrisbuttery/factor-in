var objectAssign = require('object-assign')

module.exports = {

  /**
   * factorIn
   * Take optional actions and return a Factory function
   * that calls said actions
   * @param  {Object} actions
   * @return {Function}
   */

  factorIn: function (actions) {
    if (typeof (actions) !== 'object') return null
    actions = actions || {}
    return function (f) {
      return f ? f(actions) : null
    }
  },

  /**
   * factory
   * Return a function that applies it's `actions` to any optional `args`
   * and returns an object.
   * @param  {Object} args
   * @return {Function}
   */

  factory: function (args) {
    args = args || null
    return function (actions) {
      actions = actions || {}
      return objectAssign({}, actions, args)
    }
  }
}
