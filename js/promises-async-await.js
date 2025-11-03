// Promises and async/await

const ok = new Promise(resolve => setTimeout(() => resolve('OK'), 10));
const fail = new Promise((_, reject) => setTimeout(() => reject(new Error('BOOM')), 10));

ok.then(v => console.log('then value:', v))
  .catch(e => console.log('then error:', e.message))
  .finally(() => console.log('finally after ok'));

fail.then(v => console.log('then value (should not):', v))
  .catch(e => console.log('caught error:', e.message))
  .finally(() => console.log('finally after fail'));

(async () => {
  console.log('\n--- await with try/catch ---');
  try {
    const v = await ok;
    console.log('await ok:', v);
    await fail; // throws
  } catch (e) {
    console.log('await caught:', e.message);
  }

  console.log('\n--- parallel vs sequential ---');
  const t0 = Date.now();
  const [a, b] = await Promise.all([
    new Promise(r => setTimeout(() => r('A'), 20)),
    new Promise(r => setTimeout(() => r('B'), 20))
  ]);
  console.log('parallel:', a, b, 'in', Date.now() - t0, 'ms');

  const t1 = Date.now();
  const a1 = await new Promise(r => setTimeout(() => r('A1'), 20));
  const b1 = await new Promise(r => setTimeout(() => r('B1'), 20));
  console.log('sequential:', a1, b1, 'in', Date.now() - t1, 'ms');

  console.log('\n--- Promise combinators ---');
  const results = await Promise.allSettled([Promise.resolve(1), Promise.reject('x')]);
  console.log('allSettled:', results);
})();
