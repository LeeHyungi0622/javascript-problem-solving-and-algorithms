// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `g0en2T0s8eSoft`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const word = input();
    let result = [];
    for (let w of word) {
        if (!w.match(/[a-z]/i)) {
            result.push(w);
        }
    }
    console.log(parseInt(result.join('')));
}

// solution 2
function solution(str) {
    let answer = "";
    for (let x of str) {
        if (!isNaN(x)) answer += x;
    }
    return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));