// Arrays and Common Methods

const nums = [5, 2, 9, 1, 5, 6];
console.log('map x2:', nums.map(n => n * 2));
console.log('filter >4:', nums.filter(n => n > 4));
console.log('find >6:', nums.find(n => n > 6));
console.log('some even:', nums.some(n => n % 2 === 0));
console.log('every >0:', nums.every(n => n > 0));
console.log('reduce sum:', nums.reduce((a, b) => a + b, 0));

const sortedAsc = [...nums].sort((a, b) => a - b);
console.log('sorted asc:', sortedAsc);

const letters = ['a', 'b', 'c'];
console.log('slice(1,3):', letters.slice(1, 3), 'orig:', letters);
const spliceCopy = [...letters];
console.log('splice remove/insert:', spliceCopy.splice(1, 1, 'X'), 'after:', spliceCopy);

console.log('flat:', [1, [2, [3]]].flat(2));
console.log('flatMap x2 then flatten one level:', [1,2,3].flatMap(n => [n, n*2]));

const merged = [...[1,2], ...[3,4]];
console.log('spread merge:', merged);
