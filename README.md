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
// some-test.js

import test from 'tape'
import factorIn from 'factor-in'

var fixture = factorIn ({
  foo: 'foo',
  bar: 'bar'
})

test('should do something amazing', t => {
  var actual = fixture ({ baz: function () {} })
  t.equal(Object.keys(actual).length, 3, 'I have 3 keys!')
  t.ok(actual.baz, 'I have a baz function!')
  t.end()
})

test('should do something equally amazing', t => {
  const expected = {foo: 'foo', bar: 'bar', baz: [1, 2, 3]}
  const actual = fixture ({baz: [1, 2, 3]})
  t.deepEqual(actual, expected, 'Another Triumph!')
  t.end()
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
