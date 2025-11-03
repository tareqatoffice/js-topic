## Proxies and Reflect

Intercept and customize operations on objects.

```javascript
const target = { x: 1 };
const proxy = new Proxy(target, {
  get(obj, prop, recv) {
    console.log('get', prop);
    return Reflect.get(obj, prop, recv);
  },
  set(obj, prop, value, recv) {
    if (prop === 'x' && typeof value !== 'number') throw new TypeError('x must be number');
    return Reflect.set(obj, prop, value, recv);
  }
});

proxy.x = 2;       // OK
console.log(proxy.x);
// proxy.x = 'bad'; // throws
```
