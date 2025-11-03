## Async/Await

Syntactic sugar over Promises for writing async code in a synchronous style.

```javascript
const delay = (ms, v) => new Promise(r => setTimeout(() => r(v), ms));

async function run() {
  try {
    const [a, b] = await Promise.all([delay(100, 'X'), delay(150, 'Y')]);
    console.log(a, b);
  } catch (e) {
    console.error('error:', e);
  }
}
run();
```
