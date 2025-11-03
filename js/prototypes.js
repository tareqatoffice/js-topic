// Prototypes
// Objects inherit via the prototype chain.

function Point(x, y) { this.x = x; this.y = y; }
Point.prototype.length = function () { return Math.hypot(this.x, this.y); };
const p = new Point(3, 4);
console.log('point length:', p.length()); // 5

// Object.create to set prototype explicitly
const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
console.log('proto greet:', obj.greet());
