## Modules (ESM)

Organize code into files with `export` and `import`.

```javascript
// math.js
export const PI = 3.14159;
export function area(r) { return PI * r * r; }
export default function circumference(r) { return 2 * PI * r; }
```
```javascript
// main.js
import circumference, { PI, area } from './math.js';
console.log(PI, area(2), circumference(2));

// Dynamic import
const util = await import('./util.js');
```
