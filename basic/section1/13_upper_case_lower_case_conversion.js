// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `StuDY`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const word = input();
    let result = '';
    for (let w of word) {
        if (w === w.toUpperCase()) result += w.toLowerCase();
        else if (w === w.toLowerCase()) result += w.toUpperCase();
    }
    console.log(result);
}

// solution 2
function solution(s) {
    let answer = "";
    for (let x of s) {
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}

console.log(solution("StuDY"));