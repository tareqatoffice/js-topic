// Collections: Map, Set, WeakMap, WeakSet

// Map: keys can be any value
const m = new Map();
const key = { id: 1 };
m.set(key, 'value');
console.log('Map get:', m.get(key));

// Set: unique values
const s = new Set([1, 2, 2, 3]); // deduplicates to {1,2,3}
s.add(3).add(4);
console.log('Set has 2:', s.has(2));
console.log('Set values:', [...s]);

// WeakMap/WeakSet: hold weak references to objects (no strong ownership)
// They are not iterable; used for metadata without preventing GC.
