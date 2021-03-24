//solution 1

const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString :
    `10`).split('\n');

const input = (() => {
    let line = 0;
    return () => getInput[line++];
})()

{
    const n = Number(input())
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

// solution 2
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer = answer + i;
    }

    return answer;
}

console.log(solution(10));