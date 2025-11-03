// Garbage Collection (GC) Demo
// JS engines typically use generational, incremental, and concurrent GC strategies.
// You cannot force GC in standard JS, but you can observe memory usage changes.

function fmtMB(bytes) { return (bytes / (1024 * 1024)).toFixed(2) + ' MB'; }

function logMem(label) {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    const m = process.memoryUsage();
    console.log(label, {
      rss: fmtMB(m.rss), heapTotal: fmtMB(m.heapTotal), heapUsed: fmtMB(m.heapUsed)
    });
  } else {
    console.log(label, '(memoryUsage not available in this environment)');
  }
}

let big;
logMem('start');

// Allocate many objects
(function allocate() {
  big = [];
  for (let i = 0; i < 200000; i++) {
    big.push({ i, s: 'x'.repeat(50) });
  }
})();
logMem('after allocate');

// Drop references and allow GC to reclaim
big = null;

setTimeout(() => {
  logMem('after timeout (GC may have run)');
}, 100);

// Notes:
// - Minor collections clean young generation; surviving objects are promoted to old gen.
// - Long-lived large graphs can increase heapUsed; release references to allow GC.
// - Avoid global caches without bounds; prefer WeakMap/WeakRef patterns when appropriate.
