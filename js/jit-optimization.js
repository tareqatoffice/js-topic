// JIT Optimization Demo (runnable timing; results vary by machine)

const nowMs = () => (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

function sumField(list, key) {
  let s = 0;
  for (let i = 0; i < list.length; i++) s += list[i][key];
  return s;
}

function makeMono(n) { // monomorphic shapes
  const arr = new Array(n);
  for (let i = 0; i < n; i++) arr[i] = { x: i }; // same keys, same order, same types
  return arr;
}

function makePoly(n) { // polymorphic/megamorphic
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i % 5 === 0) arr[i] = { x: i, y: true };
    else if (i % 5 === 1) arr[i] = { x: String(i) }; // different type for x
    else if (i % 5 === 2) arr[i] = Object.assign(Object.create(null), { x: i }); // proto-less
    else if (i % 5 === 3) arr[i] = { y: i, x: i }; // different insertion order
    else arr[i] = { x: i, z: i };
  }
  return arr;
}

(function run() {
  const N = 100000;
  const mono = makeMono(N);
  const poly = makePoly(N);

  // Warm-up
  for (let i = 0; i < 2; i++) { sumField(mono, 'x'); sumField(poly, 'x'); }

  let t0 = nowMs(); sumField(mono, 'x'); let t1 = nowMs();
  sumField(poly, 'x'); let t2 = nowMs();

  console.log('monomorphic ms:', (t1 - t0).toFixed(3));
  console.log('megamorphic ms:', (t2 - t1).toFixed(3));
})();
