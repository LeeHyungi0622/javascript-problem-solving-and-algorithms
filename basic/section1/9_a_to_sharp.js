// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `BANANA`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const word = input();
    const wordList = [];
    for (let w of word) {
        wordList.push(w);
    }
    for (let i = 0; i < wordList.length; i++) {
        wordList[i] = (wordList[i] === 'A') ? '#' : wordList[i];
    }
    console.log(wordList.join(''));
}

// solution 2
function solution(s) {
    let answer = "";
    for (let x of s) {
        if (x === 'A') answer += '#';
        else answer += x;
    }
    return answer;
}

let str = "BANANA";
console.log(solution(str));