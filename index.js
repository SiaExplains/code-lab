var stdin = process.stdin;
//stdin.setRawMode(true);
//stdin.resume();
//stdin.setEncoding('utf8');
app = () => {
    let commands = [
        '1.Algorithms',
        '2.Javascript',
        '3.Nodejs',
        '4.Patterns',
        '5.Paradigms',
        '6.Typescript'
    ];

    console.log(
        commands.reduce((prev, current) => {
            return prev + '\n' + current;
        }, 'Code LAB Commands:')
    );
    console.log('-------------------->');
    stdin.on('data', function(inputChar) {
        if (inputChar === '\u0003') {
            process.exit();
        }

        switch (inputChar) {
            case '1':
                stdin.pause();
                const f = require('./algorithms/recursive/fibonacci')
                    .algorithm_rec_fib;
                f().then(d => {
                    stdin.resume();
                });
                break;
            case '2':
                console.log('sia');
                break;
            default:
                console.log('invalid input');
        }
    });
};

//app();

let seconds = 0;
setInterval(() => {
    console.log(`Seconds: ${seconds++}`);
}, 1000);
