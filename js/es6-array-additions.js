// ES6: Array Additions

console.log('Array.of:', Array.of(1, 2, 3));
console.log('Array.from string:', Array.from('abc'));

const arr = [1, 2, 3, 4, 5];
console.log('find:', arr.find(n => n > 3));        // 4
console.log('findIndex:', arr.findIndex(n => n > 3)); // 3

// fill and copyWithin mutate the array
const a1 = [0, 0, 0, 0];
console.log('fill:', a1.fill(7, 1, 3)); // [0,7,7,0]

const a2 = [1, 2, 3, 4, 5];
console.log('copyWithin:', a2.copyWithin(0, 3)); // [4,5,3,4,5]
