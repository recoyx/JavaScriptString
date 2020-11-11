# JavaScriptString

Package for more String manipulations.

## API reference

```js
import { String } from 'com.recoyxgroup.javascript.string';
```

### String.apply()

Applies arguments to parameterized string, using either Array, Map or Object.

```js
console.log(String.apply('$2-$1', 'foo', 'bar'));
console.log(String.apply('some $x', { x: 10 }));
```

### String.eqv()

Returns the equivalence rate between two strings. Implemented by the [string-similarity](https://www.npmjs.com/package/string-similarity#comparetwostringsstring1-string2) package.

```js
console.log(String.eqv('x', 'xx'));
```