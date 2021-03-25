// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `6
7 3 9 5 6 12`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    let numOfTestCase = input();
    let numberList = [];
    for (let i = 0; i < numOfTestCase; i++) {
        if (i === 1) numberList = input().split(' ');
    }
    let resultList = [];
    resultList.push(Number(numberList[0]));
    for (let i = 1; i < numberList.length; i++) {
        if (Number(numberList[i]) > Number(numberList[i - 1])) resultList.push(Number(numberList[i]));
    }
    console.log(resultList.join(' '));
}

// solution 2
function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        //console.log(arr[i], arr[i - 1]);
        if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr).join(' '));