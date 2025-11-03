// Equality and Type Coercion

console.log('=== strict equality avoids coercion');
console.log('1 === "1" ->', 1 === '1'); // false
console.log('1 == "1" ->', 1 == '1');   // true (coercion)

console.log('\n=== null/undefined comparisons');
console.log('null == undefined ->', null == undefined); // true
console.log('null === undefined ->', null === undefined); // false

console.log('\n=== bool/number/string coercion dangers');
console.log('0 == false ->', 0 == false);     // true
console.log('"" == false ->', '' == false);  // true
console.log('[] == 0 ->', [] == 0);           // true
console.log('[1] == 1 ->', [1] == 1);         // true

console.log('\nPrefer === and explicit conversion:');
console.log('Number("42") === 42 ->', Number('42') === 42);
