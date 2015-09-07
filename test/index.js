var factorIn = require('../')
var test = require('tape')

test('curries a single value', function (t) {
  var expected = {foo: 'foo'}
  var f = factorIn(expected)
  t.deepEqual(f(), expected)
  t.end()
})

test('forwards extra arguments', function (t) {
  var expected = {foo: 'foo', bar: 'bar'}
  var f = factorIn({foo: 'foo'})({bar: 'bar'})
  t.deepEqual(f, expected)
  t.end()
})

test('returns inherited object data', function (t) {
  var expected = 3
  var f = factorIn({foo: 'foo', bar: function() { console.log('hello')} })
  t.deepEqual(Object.keys(f({baz: 'baz'})).length, expected)
  t.end()
})

test('reports the length of the curried function', function (t) {
  var expected = 1
  var f = factorIn({foo: 'foo', bar: 'bar'})
  t.deepEqual(f.length, expected)
  t.end()
})

test('returns undefined if an object is not provided as a param', function (t) {
  var expected = undefined
  var factor = factorIn('foo');
  t.equal(factor, expected)
  t.end()
})
