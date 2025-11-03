// Regular Expressions Deep Dive

// Flags: i (ignore case), g (global), m (multiline), s (dotAll), u (unicode), y (sticky)
console.log('flags:', /a+/igmsuy.flags);

// Character classes and ranges
console.log('classes:', 'A1_'.replace(/[A-Z]\d_/g, '#')); // '#' once

// Anchors ^ (start), $ (end), \b (word boundary)
console.log('anchors:', 'cat dog cat'.replace(/^cat/, 'CAT').replace(/cat$/, 'CAT')); // 'CAT dog CAT'

// Quantifiers: *, +, ?, {min,max}
console.log('quantifiers:', 'haaaa'.match(/ha{2,4}/)[0]); // 'haaaa'

// Groups and backreferences
console.log('groups:', '2025-11-03'.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1'));

// Named groups
const d = '2025-11-03'.replace(/(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/, (s, ...rest) => {
  const groups = rest.pop();
  return `${groups.d}/${groups.m}/${groups.y}`;
});
console.log('named groups:', d);

// Lookahead/Lookbehind (modern engines)
console.log('lookahead:', 'abc1 abc2'.replace(/\w+(?=\d)/g, 'X')); // X1 X2
console.log('lookbehind:', '1abc 2def'.replace(/(?<=\d)\w+/g, 'X')); // 1X 2X

// Practical examples
const email = 'user@example.com';
console.log('email valid:', /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email));

const text = 'cats and dogs';
console.log('replace plurals:', text.replace(/\b(cat|dog)s\b/g, '$1')); // cat and dog

// Exercises (try):
// - Validate IPv4 addresses.
// - Extract all URLs from a string (http/https).
// - Split CSV line respecting quoted fields (advanced).
