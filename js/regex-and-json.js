// Regex and JSON Basics

// Regex
const text = 'Price: $12.50, Item: ABC-1234';
const priceMatch = text.match(/\$(\d+)(?:\.(\d{2}))?/); // capture dollars and optional cents
console.log('price match:', priceMatch && priceMatch[0], 'groups:', priceMatch && priceMatch.slice(1));

console.log('replace digits with X:', text.replace(/\d/g, 'X'));

// JSON
const obj = { id: 1, name: 'Ada', secret: 'hide' };
const json = JSON.stringify(obj, (key, value) => key === 'secret' ? undefined : value, 2);
console.log('stringify with replacer:
' + json);

const parsed = JSON.parse(json, (key, value) => key === 'id' ? Number(value) : value);
console.log('parsed id type:', typeof parsed.id, parsed);
