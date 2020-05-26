process.on('exit', () => {
    console.log('Q. Then app is exiting...');
});

process.on('uncaughtException', err => {
    console.error(`CUSTOM ERROR: ${err}`);
    // we should exit process anyway
    process.exit(1);
});

console.log('1. First this item should print!');
// throw new Error('why me?!');
process.stdin.resume();
console.testUndefinedFunc();
