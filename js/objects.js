// Objects
// Key-value structures for modeling data.

const user = { id: 1, name: 'Ada' };
user.role = 'admin';             // add
console.log('has name:', 'name' in user); // true
console.log('user:', user);

delete user.id;                  // remove
console.log('after delete:', user);

console.log('keys:', Object.keys(user));
console.log('values:', Object.values(user));
console.log('entries:', Object.entries(user));
