const fetch = require('node-fetch');

let p1 = Promise.resolve('Hello World!');
let p2 = 10;
let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (error) {
            rej('error from p3');
        }
        res('This is from P3');
    }, 1000);
});
let p4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (error) {
                reject('error from p4()');
            }
            resolve('Goodbye');
        }, 3000);
    });
};

let p5 = fetch('https://jsonplaceholder.typicode.com/users').then(d =>
    d.json()
);

Promise.all([p1, p2, p3, p4(), p5])
    .then(values => {
        console.log(values);
    })
    .catch(err => {
        console.log(err);
    });
