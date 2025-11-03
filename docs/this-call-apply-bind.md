## this, call, apply, bind

`this` depends on how a function is called. Use `bind` to fix it, or `call/apply` to invoke with an explicit context.

```javascript
const obj = { x: 10, getX() { return this.x; } };
const unbound = obj.getX;
// console.log(unbound()); // undefined in strict mode

const bound = obj.getX.bind(obj);
console.log(bound()); // 10

function greet(g, p) { return `${g}, ${this.name}${p}`; }
const person = { name: 'Ada' };
console.log(greet.call(person, 'Hello', '!'));
console.log(greet.apply(person, ['Hi', '!!']));
```
