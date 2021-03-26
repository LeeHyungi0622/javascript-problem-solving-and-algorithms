// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `10
1 0 1 1 1 0 0 1 1 0`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfNumbers = Number(input());
    let numberList = [];
    for (let i = 0; i < 2; i++) {
        if (i === 1) numberList = input().split(' ');
    }
    let combo = 0;
    let result = 0;
    for (let i of numberList) {
        if (Number(i) === 1) {
            combo += 1;
            result += combo;
        } else {
            combo = 0;
        }
    }
    console.log(result);
}

// solution 2
function solution(arr) {
    let answer = 0,
        cnt = 0;
    for (let x of arr) {
        if (x === 1) {
            cnt++;
            answer += cnt;
        } else cnt = 0;
    }

    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));