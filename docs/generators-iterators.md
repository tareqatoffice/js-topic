## Generators and Iterators

### Custom iterator
```javascript
const range = {
  from: 1, to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    return {
      next: () => ({ value: current, done: current++ > this.to })
    };
  }
};
console.log([...range]); // [1,2,3]
```

### Generators
```javascript
function* gen() { yield 1; yield 2; return 3; }
for (const v of gen()) console.log(v); // 1, 2
```

### Async generators
```javascript
async function* stream() {
  yield 'A'; await new Promise(r => setTimeout(r, 10)); yield 'B';
}
for await (const v of stream()) console.log(v);
```
