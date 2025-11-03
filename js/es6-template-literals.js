// ES6: Template Literals
// Multiline strings and interpolation

const first = 'Ada';
const last = 'Lovelace';
const message = `Hello, ${first} ${last}!`;
console.log('template:', message);

// Tagged templates
function tag(strings, ...values) {
  return strings.raw[0] + values.map(v => `[${String(v)}]`).join('');
}
const tagged = tag`Sum is ${1 + 2} and name is ${first}`;
console.log('tagged:', tagged);
