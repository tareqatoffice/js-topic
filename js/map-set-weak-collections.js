// Map, Set, WeakMap, WeakSet

// Map: keys can be any value
const m = new Map();
const keyObj = { id: 1 };
m.set('a', 1);
m.set(keyObj, 'obj-value');
console.log('Map get string key:', m.get('a'));
console.log('Map get object key:', m.get(keyObj));
console.log('Map has keyObj:', m.has(keyObj));
for (const [k, v] of m) console.log('Map entry:', k, v);

// Set: unique values
const s = new Set([1,2,2,3]);
s.add(3).add(4);
console.log('Set contents:', [...s]);
console.log('Set has 2:', s.has(2));

// WeakMap/WeakSet: keys are objects and are weakly held (not iterable)
let wmKey = { name: 'temp' };
const wm = new WeakMap();
wm.set(wmKey, 123);
console.log('WeakMap get:', wm.get(wmKey));
wmKey = null; // key object becomes collectible later

let wsVal = { v: 1 };
const ws = new WeakSet();
ws.add(wsVal);
console.log('WeakSet has wsVal:', ws.has(wsVal));
wsVal = null; // value becomes collectible later
