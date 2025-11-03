## Variables

Use `let` and `const` for block-scoped bindings. Prefer `const` unless you need to reassign.

```javascript
let counter = 0; // re-assignable
const API_URL = 'https://example.com'; // not re-assignable (binding)
```

Avoid `var` in modern code due to function scoping and hoisting quirks.

