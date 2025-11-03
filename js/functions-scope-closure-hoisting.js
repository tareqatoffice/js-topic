// Scope, Hoisting, and Closures
// var (function-scoped) vs let/const (block-scoped), hoisting behaviors, closures.

// Function scope vs block scope
function demoScope() {
  if (true) {
    var v = 'var in block';
    let l = 'let in block';
    const c = 'const in block';
    console.log('inside block:', v, l, c);
  }
  console.log('outside block (var survives):', v);
  // console.log(l, c); // ReferenceError (block-scoped)
}
demoScope();

console.log('\n--- Hoisting ---');
// Function declarations hoist fully
hoisted();
function hoisted() { console.log('function declaration hoisted'); }

// var is hoisted (initialized to undefined)
console.log('var before assign:', x); // undefined
var x = 10;
console.log('var after assign:', x);

// let/const are hoisted but in TDZ until initialized
// Accessing before initialization throws ReferenceError
try { console.log(y); } catch (e) { console.log('let before init:', e.name); }
let y = 20;
console.log('let after init:', y);

console.log('\n--- Closures ---');
function createCounter(start = 0) {
  let count = start;
  return {
    inc() { count++; return count; },
    get() { return count; }
  };
}
const ctr = createCounter(1);
console.log('counter:', ctr.get(), ctr.inc(), ctr.inc());

console.log('\n--- Closure in loops ---');
// Using var: all functions share the same i (ends as 3)
var callbacksVar = [];
for (var i = 0; i < 3; i++) {
  callbacksVar.push(function() { return i; });
}
console.log('var loop results:', callbacksVar.map(fn => fn())); // [3,3,3]

// Using let: each iteration gets its own binding
let callbacksLet = [];
for (let j = 0; j < 3; j++) {
  callbacksLet.push(function() { return j; });
}
console.log('let loop results:', callbacksLet.map(fn => fn())); // [0,1,2]

// IIFE fixes var by creating a new scope per iteration
var callbacksIIFE = [];
for (var k = 0; k < 3; k++) {
  (function(captured) {
    callbacksIIFE.push(function() { return captured; });
  })(k);
}
console.log('IIFE loop results:', callbacksIIFE.map(fn => fn()));
