exports.id = 'm1';

exports.content = [1];
const m2 = require('./module-two');
console.log(m2);

exports.content.push(11);
exports.content.push(111);
