is-type-of
==========

Complete type checking for Node

## Features

- 🔒 Usefull Type Checking，including Primitive, Standard Object, Node Object
- ✨ Typescript Support
- 🚪 Typescript Type Guard Support

## Install

```
npm install is-type-of
```

## Usage

Use ES Module import

```typescript
import is from 'is-type-of';
import { isArray } from 'is-type-of';

isArray([]); // => true
is.array(); // => true
```

Compatible With

```javascript
const is = require('is-type-of');

is.array([1]); // => true
is.primitive(true); // => true
is.primitive({}); // => false
is.generatorFunction(function * () {}); // => true
is.long(Math.pow(2, 33)); // => true
is.double(0); // => false
```

Use Type Guard

```typescript
import { isArray } from 'is-type-of';

function checkArray(arr: string[] | string) {
  // => parameter) arr: string | string[]
  if (isArray(arr)) {
    // => (parameter) arr: string[]
    arr.forEach(console.log);
  }
}
```


## API Document

### Primitive

#### isString

Returns true if `val` is string, not `String` object.

See Also `is.string`

#### isNumber

Returns true if `val` is number, not `Number` object.

See Also `is.number`

#### isBoolean

Returns true if `val` is boolean, not `Boolean` object.

See Also `is.boolean`

#### isBigInt

Returns true if `val` is bigint.

See Also `is.bigInt`

#### isSymbol

Returns true if `val` is symbol.

See Also `is.symbol`

#### isUndefined

Returns true if `val` is undefined.

See Also `is.undefined`

#### isNull

Returns true if `val` is null.

See Also `is.null`

#### isNullable

Returns true if `val` is null or undefined.

See Also `is.nullable`

#### isPrimitive

Returns true if `val` is primitive.

See Also `is.primitive`

#### isInteger

Returns true if `val` is integer.

See Also `is.integer`

#### isInteger32

Returns true if `val` is integer, and between `-2 ** 31` and `2 ** 31 - 1`.

See Also `is.integer32`

#### isLong

Returns true if `val` is integer, and < `-2 ** 31`, and > `2 ** 31 - 1`.

See Also `is.long`

#### isSafeInteger

Returns true if `val` is integer, and between `-(2 ** 53 - 1)` and `2 ** 53 - 1`.

See Also `is.safeInteger`

#### isDouble

Returns true if `val` is Double.

See Also `is.double`

#### isNaN

Returns true if `val` is NaN.

See Also `is.NaN`

#### isFinite

Returns true if `val` is finite.

See Also `is.finite`

### Standard Object
# API Documentation

#### isArray

Returns true if `val` is array, it won't check items of array.

See Also `is.array`

#### isFunction

Returns true if `val` is function.

See Also `is.function`

#### isGeneratorFunction

Returns true if `val` is generator function.

See Also `is.generatorFunction`

#### isAsyncFunction

Returns true if `val` is async function.

See Also `is.asyncFunction`

#### isAsyncGeneratorFunction

Returns true if `val` is async generator function.

See Also `is.asyncGeneratorFunction`

#### isObject

Returns true if `val` is object.

See Also `is.object`

#### isClass

Returns true if `val` is class.

**Note:** "class" is supported in ECMAScript 6, and if the code is using some compiler or transpiler, the checking might fail.

See Also `is.class`

#### isRegExp

Returns true if `val` is regular expression.

See Also `is.regExp`

#### isDate

Returns true if `val` is instance of Date.

See Also `is.date`

#### isError

Returns true if `val` is instance of Error.

See Also `is.error`

#### isGenerator

Returns true if `val` is generator.

See Also `is.generator`

#### isPromise

Returns true if `val` is promise.

See Also `is.promise`

#### isPromiseLike

Returns true if `val` is like promise, if the object has `then` property, the checking will pass.

See Also `is.promiseLike`

### Node Object

#### isBuffer

Returns true if `val` is buffer.

See Also `is.buffer`

#### isStream

Returns true if `val` is stream.

See Also `is.stream`

#### isReadable

Returns true if `val` is readable stream.

See Also `is.readable`

#### isWritable

Returns true if `val` is write stream.

See Also `is.writable`

#### isDuplex

Returns true if `val` is duplex stream.

See Also `is.duplex`

### External Object

#### isLongObject

returns true if val is LongObject

LongObject is from npm package [long](https://github.com/dcodeIO/long.js)

See Also `is.longObject`

## Thanks

- [core-util-is](https://github.com/isaacs/core-util-is)
- [is-stream](https://github.com/rvagg/isstream)
- [is-class](https://github.com/miguelmota/is-class)

## License

MIT
