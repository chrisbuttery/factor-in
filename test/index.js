var factorIn = require('../')
var test = require('tape')

test('should return null if a non object is provided as a param', function (t) {
  var expected = null
  var factor = factorIn('foo');
  t.equal(factor, expected)
  t.end()
})

test('it should build', function (t) {
  var expected = {foo: 'foo', bar: 'bar', baz: {id: 1}, qux: 'qux'}
  var factor = factorIn({foo: 'foo', bar: 'bar', baz: {id: 1}});

  var f = factor({qux: 'qux'})
  t.deepEqual(f, expected)

  var g = factor({corge: 'corge'})
  t.deepEqual(g, {foo: 'foo', bar: 'bar', baz: {id: 1}, corge: 'corge'})
  t.end()
})
