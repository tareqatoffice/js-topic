// this, call, apply, bind
// `this` depends on call-site. Use bind to fix it, or call/apply to invoke with explicit context.

const obj = { x: 10, getX() { return this.x; } };
const unbound = obj.getX;
// console.log(unbound()); // undefined in strict mode (uncomment to see)

const bound = obj.getX.bind(obj);
console.log('bound this:', bound()); // 10

function greet(g, p) { return `${g}, ${this.name}${p}`; }
const person = { name: 'Ada' };
console.log('call:', greet.call(person, 'Hello', '!'));
console.log('apply:', greet.apply(person, ['Hi', '!!']));
