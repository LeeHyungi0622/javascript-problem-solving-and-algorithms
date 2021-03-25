// solution 1

const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `KoreaTimeGood`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const word = input();
    let count = 0;
    for (let w of word) {
        if (w === w.toUpperCase()) count++;
    }
    console.log(count);
}

// solution 2
function solution(s) {
    let answer = 0;
    for (let x of s) {
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        if (x === x.toUpperCase()) answer++;
    }

    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));