// Scope
// Block scope (let/const), function scope (var), module/global scope, shadowing, lexical scope

{
  let a = 1; const b = 2; // block-scoped
  console.log('inside block a+b:', a + b);
}
// Uncommenting next line would throw ReferenceError (TDZ/blocked scope)
// console.log(a, b);

function f() {
  var x = 10; // function-scoped
  return x;
}
console.log('function-scoped var:', f());

// Shadowing
let value = 1;
{
  let value = 2; // shadows outer
  console.log('shadowed value (inner):', value);
}
console.log('shadowed value (outer):', value);

// Lexical scope
const outer = 1;
function show() { console.log('lexical outer:', outer); }
function run(cb) {
  const outer = 2; // does not affect show()
  cb();
}
run(show);
