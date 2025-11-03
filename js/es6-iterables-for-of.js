// ES6: Iterables and for...of

const arr = ['a', 'b', 'c'];
for (const ch of arr) console.log('for..of array:', ch);

// Custom iterable
const range = {
  from: 1, to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    return {
      next: () => ({ value: current, done: current++ > this.to })
    };
  }
};
for (const v of range) console.log('for..of range:', v);
