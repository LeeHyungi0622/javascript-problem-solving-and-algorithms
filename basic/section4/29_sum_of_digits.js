//solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `7
128 460 603 40 521 137 123`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    let numOfNumbers = 0;
    let numberList = [];
    for (let i = 0; i < 2; i++) {
        if (i === 0) numOfNumbers = parseInt(input());
        if (i === 1) numberList = input().split(' ').map(number => parseInt(number));
    }
    let maxOfSum = Number.MIN_SAFE_INTEGER;
    let result = 0;
    for (let n of numberList) {
        let sum = 0;
        for (let sn of String(n)) {
            sum += parseInt(sn);
        }
        if (sum > maxOfSum) {
            maxOfSum = sum;
            result = n;
        } else if (sum === maxOfSum) {
            if (n > result) result = n;
        }
    }
    console.log(result);
}

// solution 2
function solution(n, arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        let sum = 0,
            tmp = x;
        while (tmp) {
            sum += (tmp % 10);
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) answer = x;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));