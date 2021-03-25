// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
good
time
good
time
student`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const numOfTestCase = Number(input());
    let wordList = [];
    for (let i = 0; i <= numOfTestCase; i++) {
        if (i >= 1) {
            wordList.push(input());
        }
    }
    const setWordList = new Set(wordList);
    console.log([...setWordList].join('\n'));
}

// solution 2
function solution(s) {
    let answer;
    // console.log(s.indexOf("student"));
    answer = s.filter((v, i) => {
        //console.log(v, i);
        if (s.indexOf(v) === i) return v;
    });
    return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));