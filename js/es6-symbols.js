// ES6: Symbols and Well-known Symbols

const ID = Symbol('id');
const obj = { [ID]: 123, name: 'Ada' };
console.log('symbols:', Object.getOwnPropertySymbols(obj));

// Well-known symbols
const iterable = {
  *[Symbol.iterator]() { yield 1; yield 2; }
};
console.log('iterable spread:', [...iterable]);

const taggedObj = {
  get [Symbol.toStringTag]() { return 'TaggedObj'; }
};
console.log(Object.prototype.toString.call(taggedObj)); // [object TaggedObj]
