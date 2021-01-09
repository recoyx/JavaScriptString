# JavaScriptString

Package for more String manipulation facility.

## API

```js
import StringHelpers from 'com.recoyxgroup.javascript.string';
```

###### `StringHelpers.apply()`

Applies arguments to parameterized string, using either Array, Map or Object.

```js
console.log(StringHelpers.apply('$2-$1', 'foo', 'bar'));
console.log(StringHelpers.apply('some $x', { x: 10 }));
```

###### `StringHelpers.equivalenceBetween(a1, a2)`

Returns the equivalence rate between two strings. Implemented by the [string-similarity](https://www.npmjs.com/package/string-similarity#comparetwostringsstring1-string2) package.

```js
console.log(StringHelpers.equivalenceBetween('x', 'xx'));
```