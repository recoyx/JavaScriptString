# JavaScriptString

Package for more String manipulations.

## API reference

```js
import { String as RString } from 'com.recoyxgroup.javascript.string';
```

### `RString.apply()`

Applies arguments to parameterized string, using either Array, Map or Object.

```js
console.log(RString.apply('$2-$1', 'foo', 'bar'));
console.log(RString.apply('some $x', { x: 10 }));
```

### `RString.eqv()`

Returns the equivalence rate between two strings. Implemented by the [string-similarity](https://www.npmjs.com/package/string-similarity#comparetwostringsstring1-string2) package.

```js
console.log(RString.eqv('x', 'xx'));
```