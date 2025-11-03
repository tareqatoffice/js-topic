## Destructuring, Spread, Rest

### Destructuring
```javascript
const [a, , c] = [1, 2, 3];
const { x, y: yy, z = 0 } = { x: 1, y: 2 };
```

### Rest
```javascript
const [head, ...tail] = [10, 20, 30];
function sum(...nums) { return nums.reduce((a, n) => a + n, 0); }
```

### Spread
```javascript
const arr = [1, 2];
const arr2 = [...arr, 3];
const obj = { a: 1 };
const obj2 = { ...obj, b: 2 };
```
