// Closures
// Functions capturing variables from their defining (lexical) scope.

function makeCounter() {
  let count = 0; // captured
  return () => ++count;
}
const c = makeCounter();
console.log('counter calls:', c(), c()); // 1 2

function makeGreeter(greeting) {
  return name => `${greeting}, ${name}!`;
}
const hi = makeGreeter('Hi');
console.log(hi('Ada'));

// Loop closure solved with let
const fns = [];
for (let i = 0; i < 3; i++) {
  fns.push(() => i);
}
console.log('loop closure:', fns.map(fn => fn())); // [0,1,2]
