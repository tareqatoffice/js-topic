// Event Loop
// Demonstrates macrotasks (setTimeout) vs microtasks (Promise.then, queueMicrotask)

console.log('A');
setTimeout(() => console.log('timeout'), 0);         // macrotask
Promise.resolve().then(() => console.log('micro'));  // microtask
queueMicrotask(() => console.log('micro2'));
console.log('B');
// Expected order: A, B, micro, micro2, timeout
