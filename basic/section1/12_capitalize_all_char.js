// solution 1

const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `ItisTimeToStudy`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const word = input();
    let result = '';
    for (let w of word) {
        // (w === w.toLowerCase()) ? result += w.toUpperCase(): result += w;
        const asciiNum = w.charCodeAt();
        (asciiNum >= 97 && asciiNum <= 122) ? result += String.fromCharCode(asciiNum - 32): result += w;
    }
    console.log(result);
}

// solution 2
function solution(s) {
    let answer = "";
    for (let x of s) {
        let num = x.charCodeAt();
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += x;

        //if(x===x.toLowerCase()) answer+=x.toUpperCase();
        //else answer+=x;
    }

    return answer;

}

let str = "ItisTimeToStudy";
console.log(solution(str));