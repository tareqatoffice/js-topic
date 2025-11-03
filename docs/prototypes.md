## Prototypes

Objects inherit from other objects via the prototype chain.

```javascript
function Point(x, y) { this.x = x; this.y = y; }
Point.prototype.length = function () { return Math.hypot(this.x, this.y); };
const p = new Point(3, 4);
console.log(p.length()); // 5
```

Use `Object.create` to set prototypes explicitly.
```javascript
const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
console.log(obj.greet());
```
