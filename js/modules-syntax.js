// Modules: import/export syntax overview (reference)
// This file demonstrates syntax and is not meant to be executed as-is.

// Named exports
// export const PI = 3.14;
// export function add(a, b) { return a + b; }

// Default export (one per module)
// export default class Calculator { sum(a, b) { return a + b; } }

// Re-exporting from another module
// export { add as sum } from './math.js';
// export * from './utils.js';

// Imports
// import Calculator, { PI, add as sum } from './math.js';
// import * as Utils from './utils.js';
// console.log(PI, sum(1,2), new Calculator().sum(3,4), Utils);

// Node notes:
// - Use ESM by naming files .mjs or setting "type":"module" in package.json
// - For CommonJS (require/module.exports), the syntax differs
