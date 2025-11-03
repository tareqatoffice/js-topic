// Classes
// Syntactic sugar over prototypes with clear semantics.

class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}
class Dog extends Animal {
  speak() { return `${super.speak()} Woof!`; }
}
console.log(new Dog('Rex').speak());

// Private fields and statics
class Counter {
  static all = [];
  #count = 0;
  constructor() { Counter.all.push(this); }
  inc() { this.#count++; }
  get value() { return this.#count; }
}
const cnt = new Counter();
cnt.inc();
console.log('counter value:', cnt.value);
