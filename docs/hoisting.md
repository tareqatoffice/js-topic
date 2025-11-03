## Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.

### Function declarations are hoisted
```javascript
say(); // works
function say() { console.log('hello'); }
```

### var is hoisted (initialized with undefined)
```javascript
console.log(x); // undefined (declared but not assigned yet)
var x = 10;
```

### let/const are hoisted into Temporal Dead Zone (TDZ)
```javascript
// console.log(y); // ReferenceError (TDZ)
let y = 5;
```

### Order matters with function expressions
```javascript
// speak(); // TypeError if uncommented because speak is undefined at this line
var speak = function () { console.log('hi'); };
```
