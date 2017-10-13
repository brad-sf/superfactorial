# superfactorial

Node.js JavaScript module to calculate the [superfactorial](https://en.wikipedia.org/wiki/Factorial#Superfactorial) value of a number.

```bash
npm install superfactorial
```

## Syntax
```javascript
sf(value);
```
### Parameters
- `value` The _positive_ number value to calculate.

### Return value
`number` superfactorial of `value`. 

## Examples
```javascript
const sf = require('superfactorial');

console.log( sf(0) ); // 1
console.log( sf(1) ); // 1
console.log( sf(2) ); // 2
console.log( sf(3) ); // 12
console.log( sf(4) ); // 288
console.log( sf(5) ); // 34560

```
