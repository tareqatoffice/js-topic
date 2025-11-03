## Closures

A closure is a function that captures variables from its lexical scope after that scope has finished executing.

### Basic example
```javascript
function makeCounter() {
  let count = 0; // captured
  return () => ++count;
}
const c = makeCounter();
console.log(c(), c()); // 1 2
```

### Factory pattern
```javascript
function makeGreeter(greeting) {
  return name => `${greeting}, ${name}!`;
}
const hi = makeGreeter('Hi');
console.log(hi('Ada'));
```

### Private state
```javascript
function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { if (amount <= balance) balance -= amount; },
    getBalance() { return balance; }
  };
}
```

### Common pitfall in loops (solved with let)
```javascript
const fns = [];
for (let i = 0; i < 3; i++) {
  fns.push(() => i);
}
console.log(fns.map(fn => fn())); // [0,1,2]
```
