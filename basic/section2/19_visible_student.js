// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `8
130 135 148 140 145 150 150 153`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    let numOfNumbers = 0;
    let numList = [];
    for (let i = 0; i < 2; i++) {
        if (i == 0) numOfNumbers = input();
        if (i == 1) numList = input().split(' ');
    }
    let count = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numOfNumbers; i++) {
        if (numList[i] > max) {
            max = numList[i];
            count += 1;
        }
    }
    console.log(count);
}

// solution 2
function solution(arr) {
    let answer = 1,
        max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }
    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));