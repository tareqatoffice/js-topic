// Destructuring, Rest, and Spread

// Array destructuring
const arr = [1, 2, 3, 4];
const [a, b, ...rest] = arr;
console.log('array destructuring:', a, b, rest);

// Default values and skipping
const [x = 10, , z = 30] = [undefined, 'skip'];
console.log('defaults/skip:', x, z);

// Object destructuring with rename and defaults
const user = { id: 7, name: 'Ada', info: { city: 'London' } };
const { id, name: fullName, role = 'guest', info: { city } } = user;
console.log('object destructuring:', id, fullName, role, city);

// Rest properties
const { id: uid, ...restProps } = user;
console.log('rest props:', uid, restProps);

// Spread arrays and objects
const mergedArr = [...[1,2], ...[3,4]];
const cloneUser = { ...user, role: 'admin' };
console.log('spread:', mergedArr, cloneUser);
