// Regular Expressions

const email = 'user@example.com';
const ok = /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email);
console.log('email valid:', ok);

const text = 'cats and dogs';
console.log('replace plurals:', text.replace(/\b(cat|dog)s\b/g, '$1'));// cat and dog
