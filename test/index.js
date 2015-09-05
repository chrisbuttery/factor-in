import { FactorIn as FI, Factory as F } from "../"
import test from 'tape'

test('Factory should return an empty object when assigned no parameters', t => {
  const expected = {}
  const factory = F()
  const f = factory()
  t.deepEqual(f, expected)
  t.end()
})


test('Factory should return an object when assigned no parameters', t => {
  const expected = {foo: 'foo'}
  const factory = F(expected)
  t.deepEqual(factory(), expected)
  t.end()
})

test('FactorIn should return null when assigned no parameters', t => {
  const expected = null
  const factorIn = FI()
  t.equal(factorIn, expected)
  t.end()
})

test('FactorIn should return a null when assigned a function', t => {
  const expected = function () {}
  const factorIn = FI(expected)
  t.equal(factorIn, null)
  t.end()
})

test('FactorIn should return an object when assigned parameters', t => {
  const expected = 'function'
  const factorIn = FI({foo: 'foo'})
  t.equal(typeof(factorIn), expected)
  t.end()
})

test('FactorIn should consume parameters from a factory', t => {
  const expected = {foo: 'foo', bar: 'bar', baz: {id: 1}, qux: 'qux'}
  const factorIn = FI({foo: 'foo', bar: 'bar', baz: {id: 1}})
  const factory = F({qux: 'qux'})
  const obj = factorIn(factory)
  t.deepEqual(obj, expected)
  t.end()
})
