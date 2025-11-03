// Optional Chaining (?.) and Nullish Coalescing (??)

const data = { user: { profile: { email: 'ada@example.com' } } };
console.log('safe email:', data.user?.profile?.email);
console.log('safe missing:', data.account?.owner?.name);

// Optional call and index
const maybeFn = Math.max;
console.log('optional call:', maybeFn?.(1, 2, 3));
const arr = null;
console.log('optional index:', arr?.[0]);

// Nullish coalescing: only uses fallback for null/undefined
console.log('nullish ??:', null ?? 'fallback', undefined ?? 'fallback');
console.log('nullish preserves 0/\"\":', 0 ?? 42, '' ?? 'x');

// vs || which treats many values as falsy
console.log('|| treats 0 as falsy:', 0 || 42);
