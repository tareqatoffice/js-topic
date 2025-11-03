## Event Loop

Understand task queues and microtasks.

```javascript
console.log('A');
setTimeout(() => console.log('timeout'), 0);         // macrotask
Promise.resolve().then(() => console.log('micro'));  // microtask
queueMicrotask(() => console.log('micro2'));
console.log('B');
// Order: A, B, micro, micro2, timeout
```
