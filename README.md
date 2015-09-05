# factor-in

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
