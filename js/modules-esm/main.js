// ESM Example: main.js
// How to run:
// 1) Node 18+: add { "type": "module" } to package.json and run: node js/modules-esm/main.js
//    OR run with: node --experimental-modules js/modules-esm/main.js (older Node)
// 2) Or rename files to .mjs and run: node js/modules-esm/main.mjs

import circumference, { PI, area } from './math.js';

console.log('PI:', PI);
console.log('area(2):', area(2));
console.log('circumference(2):', circumference(2));
