## ES6+ Overview

Key features introduced in ES6 (ES2015) and beyond.

### let/const
Block-scoped bindings replacing many `var` usages.

### Arrow functions
```javascript
const add = (a, b) => a + b;
```

### Template literals
```javascript
const name = 'Ada';
console.log(`Hello, ${name}!`);
```

### Destructuring / Spread / Rest
```javascript
const [a, b] = [1, 2];
const { x, y: yy } = { x: 3, y: 4 };
const arr = [1, 2];
const arr2 = [...arr, 3];
function f(head, ...tail) { /* ... */ }
```

### Classes
```javascript
class Person { constructor(name) { this.name = name; } }
```

### Modules (ESM)
```javascript
// math.js
export const PI = 3.14;
// main.js
import { PI } from './math.js';
```

### Promises and async/await
```javascript
const delay = ms => new Promise(r => setTimeout(r, ms));
async function run() { await delay(100); }
```

ES2016+ added: `**` exponentiation, `async/await`, `BigInt`, optional chaining `?.`, nullish coalescing `??`, private fields `#`, `Promise.allSettled`, `Promise.any`, `WeakRef`, and more.
