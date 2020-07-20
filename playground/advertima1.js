function Myfunc() {
    this.twice = function (num) {
        if (num < 2) {
            throw 'num should be greater than 2';
        }
        return num * 2;
    };
}

const myfunc = new Myfunc();
const list = [0, 4, 1, 3];
try {
    for (let i = 0; i < 4; i++) {
        const res = myfunc.twice(list[i]);
        console.log(res);
    }
} catch (e) {
    console.log(e);
}
