# factor-in

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![js-standard-style][standard-image]][standard-url]

Factory functions that return a factory functions that inherit and custom objects

## Install

```sh
$ npm install --save factor-in
```

## Usage

```js
import { FactorIn as FI, Factory as F } from 'factor-in'

const createFactory = FactorIn({
  foo () {},
  bar () {}
})

const factory1 = Factory({
  baz: 'Baz',
  qux: 'Qux'
})

const myObject1 = createFactory(factory1)
//=> {foo: foo(), bar: bar(), baz: 'Baz', qux: 'Qux'}

const factory2 = Factory({
  quux: 'Quux',
  corge: 'Corge'
})

const myObject2 = createFactory(factory2)
//=> {foo: foo(), bar: bar(), quux: 'Quux', corge: 'Corge'}
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
