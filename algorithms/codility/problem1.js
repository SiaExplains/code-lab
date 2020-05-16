// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 1;
    let pointer = A[0];
    while (pointer !== -1) {
        count++;
        pointer = A[pointer];
    }
    return count;
}

console.log(solution([1, 4, -1, 3, 2]));
