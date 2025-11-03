// Arrays
// Ordered collections with powerful methods.

const a = [1, 2, 3];
a.push(4); // [1,2,3,4]
a.pop();   // [1,2,3]
a.unshift(0); // [0,1,2,3]
a.shift();    // [1,2,3]

console.log('array:', a);

console.log('map x2:', a.map(n => n * 2));
console.log('filter even:', a.filter(n => n % 2 === 0));
console.log('reduce sum:', a.reduce((acc, n) => acc + n, 0));
