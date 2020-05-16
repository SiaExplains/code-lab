// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(riddle) {
    // write your code in JavaScript (Node.js 8.9.4)

    let chars = riddle.split('');
    let indexer = 97; //a ascii code
    for (let i = 0; i < chars.length; i++) {
        let curent = chars[i];
        let last = chars[i - 1] ? chars[i - 1] : '';
        let next = chars[i + 1] ? chars[i + 1] : '';
        console.log('curr: ', curent);
        console.log('last: ', last);
        console.log('next: ', next);
        if (curent == '?') {
            let replaceWith = String.fromCharCode(indexer);
            console.log('rep: ', replaceWith);
            while (replaceWith == last || replaceWith == next) {
                replaceWith = String.fromCharCode(++indexer);
                console.log('rep: ', replaceWith);

                if (indexer == 123) {
                    indexer = 97; // rest
                }
            }
            chars[i] = replaceWith;
        }
        indexer = 97; //reset
        console.log('----------------');
    }

    return chars.join('');
}

//console.log(solution('ab?ac?'));
console.log(solution('rd?e?wg??'));
