// solution 1

const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `teachermode e`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})()

{
    const iv = input().split(' ');
    const inputWord = iv[0];
    const searchWord = iv[1];

    let p1 = 1000;
    let answer = [];
    for (let w of inputWord) {
        if (w === searchWord) p1 = 0;
        else p1 += 1;
        answer.push(p1);
    }
    let p2 = 1000;
    for (let i = inputWord.length - 1; i >= 0; i--) {
        if (searchWord === inputWord[i]) {
            p2 = 0;
        } else {
            p2 += 1;
            answer[i] = Math.min(answer[i], p2);
        }
    }
    console.log(answer.join(' '));
}