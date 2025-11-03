// Closures Deep Dive
// Private state, factories, memoization, pitfalls, and fixes

function makeCounter() {
  let count = 0; // captured
  return () => ++count;
}
const c = makeCounter();
console.log('counter calls:', c(), c()); // 1 2

// Factory with parameters captured
function makeGreeter(greeting) {
  return name => `${greeting}, ${name}!`;
}
const hi = makeGreeter('Hi');
console.log(hi('Ada'));

// Memoization using closure cache
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
const slowSquare = n => { for (let i = 0; i < 1e6; i++) {}; return n * n; };
const fastSquare = memoize(slowSquare);
console.log('memoized:', fastSquare(9), fastSquare(9)); // second call fast

// Private module pattern
function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { if (amount <= balance) balance -= amount; },
    getBalance() { return balance; }
  };
}
const acct = createBankAccount();
acct.deposit(100); acct.withdraw(30);
console.log('balance:', acct.getBalance());

// Pitfall: var in loops captures same binding
const fnsVar = [];
for (var i = 0; i < 3; i++) { // var -> one shared binding
  fnsVar.push(function() { return i; });
}
console.log('var loop captured:', fnsVar.map(fn => fn())); // [3,3,3]

// Fix 1: let creates a new binding per iteration
const fnsLet = [];
for (let j = 0; j < 3; j++) { // let -> new binding per loop
  fnsLet.push(function() { return j; });
}
console.log('let loop captured:', fnsLet.map(fn => fn())); // [0,1,2]

// Fix 2: IIFE to capture current value (legacy pattern)
const fnsIIFE = [];
for (var k = 0; k < 3; k++) {
  (function(kCopy) { fnsIIFE.push(function() { return kCopy; }); })(k);
}
console.log('iife loop captured:', fnsIIFE.map(fn => fn())); // [0,1,2]

// Exercises (uncomment and try):
// - Implement memoizeAsync for Promise-returning functions using Map of keys->Promise.
// - Build once(fn) that runs a function once and returns cached result thereafter.
