// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `2 5 1`).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const arr = input().split(' ');

console.log(Math.min(...arr));

// solution 2
function solution(a, b, c) {
    let answer
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;
    return answer;
}

console.log(solution(2, 5, 1));