## Functions

Ways to declare functions and pass parameters.

```javascript
function add(a, b) { return a + b; }            // declaration
const mul = function (a, b) { return a * b; };  // expression
const sqr = x => x * x;                         // arrow

function greet(name = 'world', ...extras) {
  return `Hello ${name}! Extras: ${extras.join(',')}`;
}
```

Arrows capture `this` lexically; declarations are hoisted; use defaults and rest parameters for flexibility.
