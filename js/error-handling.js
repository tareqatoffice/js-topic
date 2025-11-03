// Error Handling: try/catch/finally and custom errors

function mayThrow(v) {
  if (v < 0) throw new RangeError('v must be >= 0');
  return Math.sqrt(v);
}

try {
  console.log('sqrt 9:', mayThrow(9));
  console.log('sqrt -1:', mayThrow(-1));
} catch (e) {
  if (e instanceof RangeError) {
    console.log('caught RangeError:', e.message);
  } else {
    console.log('caught error:', e.message);
  }
} finally {
  console.log('finally runs regardless');
}

class AppError extends Error {
  constructor(message, code) { super(message); this.code = code; }
}

function doWork() {
  throw new AppError('Something failed', 'E_WORK');
}

try {
  doWork();
} catch (e) {
  console.log('custom error:', e.name, e.code, e.message);
}

// Async error handling
(async () => {
  const ok = Promise.resolve(1);
  const bad = Promise.reject(new Error('boom'));
  try {
    const v = await ok;
    console.log('await ok:', v);
    await bad; // throws
  } catch (e) {
    console.log('await caught:', e.message);
  }
})();
