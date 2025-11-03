## IIFE (Immediately Invoked Function Expression)

IIFE executes immediately after it is created, often used to create a private scope.

```javascript
(function () {
  const secret = 42;
  console.log('IIFE ran');
})();
```

### Avoiding global pollution (legacy pattern)
```javascript
var Module = (function () {
  let count = 0; // private
  return {
    inc() { count++; },
    value() { return count; }
  };
})();
```

IIFEs are less common with ES modules, which provide module scope by default.
