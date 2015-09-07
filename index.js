var objectAssign = require('object-assign')
var R = require('ramda')

function FactorIn (actions) {
  if (typeof (actions) !== 'object') return
  return function (args) {
    return objectAssign(
      {},
      actions,
      args
    )
  }
}

module.exports = R.curry(FactorIn)
