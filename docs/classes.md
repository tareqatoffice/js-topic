## Classes

Syntactic sugar over prototypes with clear semantics.

```javascript
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}
class Dog extends Animal {
  speak() { return `${super.speak()} Woof!`; }
}
console.log(new Dog('Rex').speak());
```

Private fields and statics:
```javascript
class Counter {
  static all = [];
  #count = 0;
  constructor() { Counter.all.push(this); }
  inc() { this.#count++; }
  get value() { return this.#count; }
}
```
