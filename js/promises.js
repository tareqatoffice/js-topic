// Promises Deep Dive
// Chaining, error propagation, microtask ordering, and combinators

const delay = (ms, value, shouldReject = false) => new Promise((res, rej) => setTimeout(() => shouldReject ? rej(value) : res(value), ms));

console.log('--- Chaining and error propagation ---');
Promise.resolve(1)
  .then(v => v + 1)               // 2
  .then(v => { throw new Error('boom'); })
  .then(() => console.log('never'))
  .catch(err => { console.log('caught:', err.message); return 42; })
  .then(v => console.log('recovered value:', v));    // 42

console.log('\n--- Microtask queue ordering ---');
Promise.resolve().then(() => console.log('micro A'));
Promise.resolve().then(() => console.log('micro B'));
queueMicrotask(() => console.log('micro C'));
// Order: micro A, micro B, micro C (Promise jobs enqueue FIFO before queueMicrotask in many engines)

console.log('\n--- Combinators: all vs race vs allSettled vs any ---');
(async () => {
  const tasks = [delay(50, 'A'), delay(30, 'B'), delay(40, 'C', /*reject*/ false)];
  console.log('all:', await Promise.all(tasks));
  console.log('race:', await Promise.race(tasks));
  console.log('allSettled:', (await Promise.allSettled(tasks)).map(r => r.status));
  console.log('any (first fulfilled):', await Promise.any(tasks));

  try {
    await Promise.all([delay(10, 'ok'), delay(5, new Error('fail'), true)]);
  } catch (e) {
    console.log('all rejected due to one failure');
  }
  try {
    await Promise.any([delay(10, new Error('x'), true), delay(5, new Error('y'), true)]);
  } catch (agg) {
    console.log('any AggregateError when all reject');
  }
})();
