// Destructuring, Spread, Rest

// Destructuring
const [a, , c] = [1, 2, 3];
const { x, y: yy, z = 0 } = { x: 1, y: 2 };
console.log('array destructuring:', a, c);
console.log('object destructuring:', x, yy, z);

// Rest
const [head, ...tail] = [10, 20, 30];
function sum(...nums) { return nums.reduce((acc, n) => acc + n, 0); }
console.log('head/tail:', head, tail);
console.log('sum:', sum(1, 2, 3));

// Spread
const arr = [1, 2];
const arr2 = [...arr, 3];
const obj2 = { a: 1 };
const obj3 = { ...obj2, b: 2 };
console.log('spread arrays:', arr2);
console.log('spread objects:', obj3);
