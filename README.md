# JavaScriptString

Package for more String manipulations.

## API

```js
import String2 from 'com.recoyxgroup.javascript.string';
```

###### `String2.apply()`

Applies arguments to parameterized string, using either Array, Map or Object.

```js
console.log(String2.apply('$2-$1', 'foo', 'bar'));
console.log(String2.apply('some $x', { x: 10 }));
```

###### `String2.eqv()`

Returns the equivalence rate between two strings. Implemented by the [string-similarity](https://www.npmjs.com/package/string-similarity#comparetwostringsstring1-string2) package.

```js
console.log(String2.eqv('x', 'xx'));
```