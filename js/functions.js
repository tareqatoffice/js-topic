// Functions
// Declarations, expressions, arrow functions, defaults, rest parameters

function add(a, b) { return a + b; }            // declaration
const mul = function (a, b) { return a * b; };  // expression
const sqr = x => x * x;                         // arrow

function greet(name = 'world', ...extras) {
  return `Hello ${name}! Extras: ${extras.join(',')}`;
}

console.log('add:', add(2, 3));
console.log('mul:', mul(2, 3));
console.log('sqr:', sqr(4));
console.log('greet:', greet('Ada', 1, 2));
