// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `KKHSSSSSSSE`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})()

{
    const inputWord = input();
    let noRepeatWord = new Set(inputWord);
    let noRepeatWordList = [...noRepeatWord];

    for (let i = 0; i < noRepeatWordList.length; i++) {
        let repeatCount = 0;
        for (let w of inputWord) {
            if (noRepeatWordList[i] === w) repeatCount += 1;
        }
        if (repeatCount >= 2) noRepeatWordList[i] += repeatCount;
    }
    console.log(noRepeatWordList.join(''));
    // K2HS7E
}

// solution 2
function solution(s) {
    let answer = "";
    let cnt = 1;
    s = s + " ";
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) cnt++;
        else {
            answer += s[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));