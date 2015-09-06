var F = require('../')
var FactorIn = F.factorIn
var Factory = F.factory
var test = require('tape')

test('Factory: should return an empty object when assigned no parameters', function (t) {
  var expected = {}
  var factory = Factory()
  var f = factory()
  t.deepEqual(f, expected)
  t.end()
})

test('Factory: should return an object when assigned no parameters', function (t) {
  var expected = {foo: 'foo'}
  var factory = Factory(expected)
  t.deepEqual(factory(), expected)
  t.end()
})

test('FactorIn: should return null when assigned no parameters', function (t) {
  var expected = null
  var factorIn = FactorIn()
  t.equal(factorIn, expected)
  t.end()
})

test('FactorIn: should return a null when assigned a function', function (t) {
  var expected = function () {}
  var factorIn = FactorIn(expected)
  t.equal(factorIn, null)
  t.end()
})

test('FactorIn: should return an object when assigned parameters', function (t) {
  var expected = 'function'
  var factorIn = FactorIn({foo: 'foo'})
  t.equal(typeof(factorIn), expected)
  t.end()
})

test('FactorIn: should consume parameters from a factory', function (t) {
  var expected = {foo: 'foo', bar: 'bar', baz: {id: 1}, qux: 'qux'}
  var factorIn = FactorIn({foo: 'foo', bar: 'bar', baz: {id: 1}})
  var factory = Factory({qux: 'qux'})
  var obj = factorIn(factory)
  t.deepEqual(obj, expected)
  t.end()
})
