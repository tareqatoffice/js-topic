// ES6: Enhanced Object Literals

const x = 1, y = 2;

// Property shorthand, method shorthand, computed property names
const obj = {
  x, // property shorthand
  y,
  sum() { return this.x + this.y; }, // method shorthand
  ['key-' + (x + y)]: 'value' // computed property name
};

console.log('enhanced obj:', obj, 'sum:', obj.sum());
