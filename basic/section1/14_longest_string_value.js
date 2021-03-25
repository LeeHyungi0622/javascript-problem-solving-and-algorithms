// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
teacher
time
student
beautiful
good`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const numOfTestCase = Number(input());
    const wordList = [];
    let wordLength = Number.MIN_SAFE_INTEGER;
    let longestWord = '';
    for (let i = 0; i <= numOfTestCase; i++) {
        if (i >= 1) wordList.push(input());
    }
    for (let w of wordList) {
        if (w.length > wordLength) {
            wordLength = w.length;
            longestWord = w;
        }
    }
    console.log(longestWord);
}

// solution 2
function solution(s) {
    let answer = "",
        max = Number.MIN_SAFE_INTEGER;
    for (let x of s) {
        if (x.length > max) {
            max = x.length;
            answer = x;
        }
    }
    return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));