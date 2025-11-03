// Promises
// Represent eventual completion/failure of async operations.

const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

delay(200, 'A')
  .then(v => console.log('then:', v))
  .catch(err => console.error('error:', err))
  .finally(() => console.log('finally'));

// Combinators with an async IIFE to use await
(async () => {
  const tasks = [1, 2, 3].map(n => delay(n * 50, n));
  const all = await Promise.all(tasks).catch(e => e);
  const settled = await Promise.allSettled(tasks);
  const race = await Promise.race(tasks);
  const any = await Promise.any(tasks).catch(e => e); // AggregateError if all reject
  console.log('all:', all);
  console.log('settled:', settled.map(r => r.status));
  console.log('race:', race);
  console.log('any:', any);
})();
