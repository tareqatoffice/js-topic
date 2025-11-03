// Event Loop Deep Dive
// Demonstrates macrotasks (setTimeout) vs microtasks (Promise.then, queueMicrotask),
// nested microtasks, task boundaries, and breaking long tasks.

console.log('--- Basic ordering ---');
console.log('A');
setTimeout(() => console.log('timeout (task)'), 0); // macrotask (task queue)
Promise.resolve().then(() => console.log('micro 1 (microtask)'));
queueMicrotask(() => console.log('micro 2 (microtask)'));
console.log('B');
// Expected: A, B, micro 1, micro 2, timeout

console.log('\n--- Microtasks inside a task ---');
setTimeout(() => {
	console.log('task start');
	Promise.resolve().then(() => console.log('micro in task 1'));
	queueMicrotask(() => console.log('micro in task 2'));
	console.log('task end (microtasks run after this)');
}, 0);

console.log('\n--- Nested microtasks ---');
Promise.resolve().then(() => {
	console.log('micro outer');
	Promise.resolve().then(() => console.log('micro nested 1'));
	queueMicrotask(() => console.log('micro nested 2'));
});

console.log('\n--- Breaking a long task (cooperative scheduling) ---');
function longWorkChunked(total = 5_000_000) {
	let i = 0;
	function chunk() {
		const end = Math.min(i + 500_000, total);
		while (i < end) {
			i++;
		}
		if (i < total) setTimeout(chunk, 0); // yield back to event loop
		else console.log('long work done');
	}
	chunk();
}
longWorkChunked();

console.log('\n--- Starvation demo (do NOT do this) ---');
// A tight while loop blocks the event loop; timers and microtasks wait until it ends.
// Uncomment to see blocking behavior (it will freeze output until loop finishes).
// const t0 = Date.now(); while (Date.now() - t0 < 3000) {} // blocks ~3s
// console.log('after blocking loop');
