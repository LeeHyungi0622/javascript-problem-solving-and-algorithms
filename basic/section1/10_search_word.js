// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `COMPUTERPROGRAMMING
R`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    word = '';
    searchWord = '';
    for (let i = 0; i < 2; i++) {
        if (i === 0) word = input();
        else if (i === 1) searchWord = input();
    }
    let count = 0;
    for (let w of word) {
        if (w === searchWord) count++;
    }
    console.log(count);
}


// solution 2
function solution(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) answer++;
    }
    return answer;
}

let testCase = "COMPUTERPROGRAMMING";
console.log(solution(testCase, 'R'));


// solution 3
function solution(s, t) {
    let answer = s.split(t).length;
    return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));