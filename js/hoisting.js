// Hoisting
// Declarations are moved to the top of their scope during compilation.

say(); // works because function declarations are hoisted
function say() { console.log('hello'); }

console.log('var before assign:', x); // undefined (declared but not assigned yet)
var x = 10;
console.log('var after assign:', x);

// let/const are hoisted into the Temporal Dead Zone (TDZ)
// Uncommenting next line would throw ReferenceError (TDZ)
// console.log(y);
let y = 5;
console.log('let after init:', y);
