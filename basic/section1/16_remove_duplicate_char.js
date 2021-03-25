// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `ksekkset`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const word = input();
    const setWordList = new Set(word);
    const wordList = [...setWordList];
    console.log(wordList.join(''));
}

// solution 2
function solution(s) {
    let answer = "";
    //console.log(s.indexOf("K"));
    for (let i = 0; i < s.length; i++) {
        //console.log(s[i], i, s.indexOf(s[i]));
        //문자가 처음 발견된 위치 index와 for-loop의 index가 같은 경우만 결과 문자열에 붙이기
        if (s.indexOf(s[i]) === i) answer += s[i];
    }
    return answer;
}
console.log(solution("ksekkset"));