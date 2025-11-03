// IIFE (Immediately Invoked Function Expression)
// Executes immediately, creates a private scope.

(function () {
  const secret = 42;
  console.log('IIFE ran with secret:', secret);
})();

// Module pattern using IIFE (legacy pattern; ES modules are preferred)
var CounterModule = (function () {
  let count = 0; // private
  return {
    inc() { count++; },
    value() { return count; }
  };
})();

CounterModule.inc();
console.log('CounterModule value:', CounterModule.value());
