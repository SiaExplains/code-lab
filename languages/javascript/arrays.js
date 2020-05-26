var names = ['sia'];
names.unshift('john');
names.unshift('sarah');
var newNames = names.concat(['ali', 'reza']);
var newCoppiedArrayWithScope = newNames.copyWithin(2, 1, 2);
for (x of newNames.entries()) {
    console.log(x);
}

//console.log(x);
// console.table(names);
// console.table(newNames);
