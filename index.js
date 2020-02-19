const readline = require('readline');

readInput = () => {
    let inputChar = '';
    while (inputChar.toLocaleLowerCase() !== 'q') {
        console.log(
            `1. Recursion Functions\r
         2. Dynamic Programming\r
         Q. Quit`
        );
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        });
        rl.on('keypress', input => {
            inputChar = input;
        }).on('close', () => {
            if (inputChar.toLocaleLowerCase() === 'q') {
                return;
            }

            switch (inputChar) {
                case '1':
                    console.log('ali');
                    break;
                case '2':
                    console.log('sia');
                    break;
                default:
                    console.log('invalid input');
            }
        });
    }
};
readInput();
