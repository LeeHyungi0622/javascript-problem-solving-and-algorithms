// solution1

const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `6
120 130 150 150 130 150`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfNumbers = Number(input());
    const numberList = input().split(' ').map(n => +n);
    const sortedList = [...numberList].sort((f, s) => f - s);
    const checkList = Array.from({ length: numberList.length }, () => false);

    numberList.forEach((v, i) => {
        console.log(v, sortedList[i]);
        if (v !== sortedList[i]) {
            checkList[i] = true;
        }
    });

    const output = [];
    checkList.forEach((result, i) => {
        if (result === true) {
            output.push(i + 1);
        }
    });
    console.log(output.join(' '));
}

// solution 2
function solution(arr) {
    let answer = [];
    let sortArr = arr.slice();
    sortArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortArr[i]) answer.push(i + 1);
    }
    return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));