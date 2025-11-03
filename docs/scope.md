## Scope

Scope determines where variables are accessible.

### Types of scope
- Block scope: `let` and `const` within `{ ... }`
- Function scope: `var` and function parameters/locals
- Module scope: each ES module has its own top-level scope
- Global scope: top-level in scripts

```javascript
{
  let a = 1; const b = 2; // block-scoped
}
// console.log(a, b); // ReferenceError

function f() {
  var x = 10; // function-scoped
}
// console.log(x); // ReferenceError
```

### Shadowing
```javascript
let value = 1;
{
  let value = 2; // shadows outer
  console.log(value); // 2
}
console.log(value); // 1
```

### Lexical scope
Variables are resolved by where functions are defined, not where called.
```javascript
const outer = 1;
function show() { console.log(outer); }
function run(cb) {
  const outer = 2; // does not affect show()
  cb();
}
run(show); // 1
```
