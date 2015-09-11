# factor-in

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![js-standard-style][standard-image]][standard-url]

Generate unique factory functions that return objects with inherited object data.  
Useful for creating custom object data for unit tests.

## Install

```sh
$ npm install --save factor-in
```

## Usage

```js
import factorIn from 'factor-in'

// Create our base object data we expect all
// factory functions to inherit from.
const f = factorIn ({
  foo () {},
  bar () {}
})

var obj = f ({ baz: 'Baz', qux: 'Qux' })
//=> {foo: foo(), bar: bar(), baz: 'Baz', qux: 'Qux'}
```

```js
test('Demo component', nest => {
  // fixture to be shared across nested tests
  const fixture = factorIn({
    setWord () {},
    setMode () {}
  })

  nest.test('...with basic fixture', t => {
    const el = <Hello actions={ fixture() } />
    //> { setWord: function setWord () {}, setMode: function setMode () {} }
    t.equal(actual, expected, 'should have common methods')
    t.end()
  })

  nest.test('...with extended fixture', t => {
    const extendedFixture = fixture({ setAction () {} })
    const el = <Hello actions={ extendedFixture } />
    //> { setWord: function setWord () {}, setMode: function setMode() {}, setAction: function setAction() {} }
    t.equal(actual, expected, 'should have common and extended methods')
    t.end()
  })
})
```

## License

MIT © [Chris Buttery](http://chrisbuttery.com)

[npm-image]: https://img.shields.io/npm/v/factor-in.svg?style=flat-square
[npm-url]: https://npmjs.org/package/factor-in
[travis-image]: https://img.shields.io/travis/chrisbuttery/factor-in.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisbuttery/factor-in
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[coveralls-image]: https://img.shields.io/coveralls/chrisbuttery/factor-in.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chrisbuttery/factor-in?branch=master
