const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const n1 = Math.floor(Math.random() * 10 + 1);
const n2 = Math.floor(Math.random() * 10 + 1);
const answer = n1 + n2;

rl.question(`What is ${n1} + ${n2}?\n`, (input) => {
    console.log(input);
    if (answer == input.trim()) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        rl.on('line', (input) => {
            if (answer == input.trim()) {
                rl.close();
            } else {
                rl.setPrompt(`Your answer of ${input} is incorrect\n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {
    console.log('Correct!');
});
