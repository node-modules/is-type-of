is-type-of
==========

complete type checking for node, extend [core-util-is](https://github.com/isaacs/core-util-is)

## Install

```
npm install is-type-of
```

## Example

```
var is = require('is-type-of');

is.array([1]); // => true
is.primitive(true); // => true
is.primitive({}); // => false
is.generatorFunction(function * () {}); // => true
is.long(Math.pow(2, 33)); // => true
is.double(0); // => false
```

## API

### From [core-util-is](https://github.com/isaacs/core-util-is)

#### is.array(arr)

#### is.boolean(bool)

#### is.null(null)

#### is.nullOrUndefined(null)

#### is.number(num)

#### is.string(str)

#### is.symbol(sym)

#### is.undefined(undef)

#### is.regExp(reg)

#### is.object(obj)

#### is.date(date)

#### is.error(err)

#### is.function(fn)

#### is.primitive(prim)

#### is.buffer(buf)

### Extend API

#### is.generator(gen)

#### is.generatorFunction(fn)

#### is.promise(fn)

#### is.int(int)

#### is.double(double)

#### is.long(long)

## License

MIT
