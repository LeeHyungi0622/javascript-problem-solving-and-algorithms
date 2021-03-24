// solution 1
const fs = require('fs');

const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `25`).split('\n');

const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const dozen = Number(input());
    console.log(Math.ceil(dozen / 12));
}

// solution 2
function solution(n) {
    let answer;
    answer = Math.ceil(n / 12);
    return answer;
}

console.log(solution(178));