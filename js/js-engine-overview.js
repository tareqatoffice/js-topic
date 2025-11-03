// JavaScript Engine Overview (runnable notes)
//
// High-level pipeline (typical of modern engines like V8, SpiderMonkey, JavaScriptCore):
// 1) Parse -> tokens -> AST (Abstract Syntax Tree)
// 2) Scope resolution, hoisting processed at compile time
// 3) Interpreter generates bytecode (baseline execution)
// 4) Profiler collects hot paths, types, shapes
// 5) JIT compiler optimizes hot code (inlines, unboxes, removes checks)
// 6) Deoptimization if assumptions break at runtime
// 7) Garbage Collector reclaims memory (usually generational + incremental)
//
// You cannot directly "see" these steps without engine flags, but you can write
// code that behaves better with JIT by keeping types and object shapes consistent.

// Helper timer (uses performance if available, falls back to Date.now)
const nowMs = () => (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

// Example 1: Keep object shapes consistent (monomorphic) for faster property access
function sumX(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) sum += list[i].x;
  return sum;
}

function buildObjectsConsistent(n) {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    // consistent shape: only property x, added in same order
    arr[i] = { x: i };
  }
  return arr;
}

function buildObjectsMegamorphic(n) {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0) arr[i] = { x: i, y: 1 };      // extra prop
    else if (i % 3 === 1) arr[i] = { x: i.toString() }; // different type
    else arr[i] = Object.create(null); arr[i].x = i;     // different prototype
  }
  return arr;
}

(function demoShapes() {
  const N = 100000;
  const a = buildObjectsConsistent(N);
  const b = buildObjectsMegamorphic(N);

  // Warm-up to trigger JIT
  for (let i = 0; i < 3; i++) { sumX(a); sumX(b); }

  let t0 = nowMs();
  sumX(a);
  let t1 = nowMs();
  sumX(b);
  let t2 = nowMs();
  console.log('sumX consistent ms:', (t1 - t0).toFixed(3));
  console.log('sumX megamorphic ms:', (t2 - t1).toFixed(3));
})();

// Example 2: Arrays — prefer packed (no holes) and consistent element types
(function demoArrays() {
  const packed = [];
  for (let i = 0; i < 100000; i++) packed.push(i); // packed integers

  const t0 = nowMs();
  let s = 0; for (let i = 0; i < packed.length; i++) s += packed[i];
  const t1 = nowMs();

  const sparse = [];
  for (let i = 0; i < 100000; i++) sparse.push(i);
  sparse[1000000] = 1; // creates a hole-y sparse array
  let s2 = 0; for (let i = 0; i < sparse.length; i++) s2 += sparse[i] || 0;
  const t2 = nowMs();

  console.log('packed sum ms:', (t1 - t0).toFixed(3));
  console.log('sparse sum ms:', (t2 - t1).toFixed(3));
})();

// Example 3: Avoid dynamic features on hot paths (eval, with) — they block many optimizations
// (Not executed, just guidance)
// eval('var z = 1'); // de-optimizes scope; avoid in hot code
// with (obj) { x = 1 } // dynamic scope; avoid

// Example 4: Strict mode helps predictability for engines (and you)
(function strictMode() {
  'use strict';
  // In strict mode, accidental globals throw ReferenceError instead of creating globals
  try { nonExistent = 1; } catch (e) { console.log('strict mode caught:', e.name); }
})();
