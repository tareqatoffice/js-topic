## Objects

Key-value structures for modeling data.

```javascript
const user = { id: 1, name: 'Ada' };
user.role = 'admin';
console.log('name' in user); // true

delete user.id;
```

Utilities: `Object.keys`, `Object.values`, `Object.entries`, `Object.assign`, `Object.fromEntries`.

