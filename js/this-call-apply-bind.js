// this, call, apply, bind — Deep Dive
// `this` is determined by call-site. Arrow functions capture `this` lexically.

const obj = { x: 10, getX() { return this.x; } };
const unbound = obj.getX;
// console.log(unbound()); // undefined in strict mode (uncomment to see)

const bound = obj.getX.bind(obj);
console.log('bound this:', bound()); // 10

function greet(g, p) { return `${g}, ${this.name}${p}`; }
const person = { name: 'Ada' };
console.log('call:', greet.call(person, 'Hello', '!'));
console.log('apply:', greet.apply(person, ['Hi', '!!']));

// Pitfall: passing methods as callbacks loses `this`
const logger = {
  prefix: '[LOG]',
  log(msg) { console.log(this.prefix, msg); }
};
setTimeout(logger.log, 0, 'lost this');            // undefined prefix
setTimeout(logger.log.bind(logger), 0, 'bound ok'); // [LOG] bound ok

// Arrow functions capture `this` from surrounding scope
const widget = {
  id: 1,
  init() {
    // setInterval(function() { console.log(this.id); }, 100); // this would be global/undefined
    setTimeout(() => { console.log('arrow this id:', this.id); }, 0); // arrow captures widget
  }
};
widget.init();
