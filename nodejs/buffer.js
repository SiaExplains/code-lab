const { StringDecoder } = require('string_decoder');

let safe = Buffer.alloc(8);
let unsafe = Buffer.allocUnsafe(8);
let unsafeToSafe = Buffer.allocUnsafe(8).fill();
let radomUnsafeData = Buffer.allocUnsafe(800).toString();
let stringBuffer = Buffer.from('Hello World!');
let unicodeString = Buffer.from('سیاوش');

const decoder = new StringDecoder('utf8');

console.log(safe);
console.log(unsafe);
console.log(unsafeToSafe);
console.log(stringBuffer);
console.log(decoder.write(unicodeString));
//console.log(radomUnsafeData);
