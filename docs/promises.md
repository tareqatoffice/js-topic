## Promises

Promises represent eventual completion or failure of an async operation.

```javascript
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

delay(200, 'A')
  .then(v => console.log('then:', v))
  .catch(err => console.error('error:', err))
  .finally(() => console.log('done'));
```

Combinators:
```javascript
const tasks = [1, 2, 3].map(n => delay(n * 50, n));
await Promise.all(tasks);            // rejects if any reject
await Promise.allSettled(tasks);     // always resolves
await Promise.race(tasks);           // first settled
await Promise.any(tasks);            // first fulfilled
```
