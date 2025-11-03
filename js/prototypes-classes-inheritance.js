// Prototypes, Classes, and Inheritance

// Constructor function + prototype methods
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() { return 'Hello, ' + this.name; };

const p = new Person('Ada');
console.log('proto greet:', p.greet());
console.log('p.__proto__ === Person.prototype:', p.__proto__ === Person.prototype);

// Class syntax with extends and super
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}

class Dog extends Animal {
  constructor(name) { super(name); }
  speak() { return `${this.name} barks.`; }
}

const d = new Dog('Rex');
console.log('class speak:', d.speak());
console.log('instanceof checks:', d instanceof Dog, d instanceof Animal);

// Object.create for prototypal inheritance
const base = { kind: 'base', info() { return 'kind=' + this.kind; } };
const derived = Object.create(base);
derived.kind = 'derived';
console.log('Object.create:', derived.info());

// Prototype chain peek
console.log('prototype chain step:', Object.getPrototypeOf(derived) === base);
