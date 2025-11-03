// Variables
// Use let and const for block-scoped bindings. Prefer const unless reassignment is needed.

let counter = 0; // re-assignable
const API_URL = 'https://example.com'; // binding is not re-assignable

counter += 1;
console.log('counter:', counter);
console.log('API_URL:', API_URL);
