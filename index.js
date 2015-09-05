var objectAssign = require('object-assign')

module.exports = {
  /**
   * FactoryFactory
   * Take optional actions and return a Factory function
   * calling said actions
   * @param  {Object} actions
   * @return {Function}
   */

  FactorIn: function (actions) {
    if (typeof (actions) !== 'object') return null
    actions = actions || {}
    return function (f) {
      return f ? f(actions) : null
    }
  },

  /**
   * Factory
   * Return a function that applies it's `actions` to any optional `args`
   * and returns an object.
   * @param  {Object} args
   * @return {Function}
   */

  Factory: function (args) {
    args = args || null

    return function (actions) {
      actions = actions || {}

      return objectAssign(
        {},
        actions,
        args
      )
    }
  }
}
