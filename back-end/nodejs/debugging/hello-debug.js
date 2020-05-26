// to debug node in chrome use the following command:
// node --inspect hello-debug.js
mul = (a, b) => {
    let c = 0;
    c = a * b;
    return c;
};

let x = 6;
let y = 5;

let z = mul(x, y);
console.log(z);
