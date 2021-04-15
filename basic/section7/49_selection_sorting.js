const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `6
13 5 11 7 23 15`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfNumbers = Number(input());
    const numberList = input().split(' ').map(n => +n);
    let answer = numberList;
    for (let i = 0; i < numberList.length; i++) {
        let idx = i;
        for (let j = i + 1; j < numberList.length; j++) {
            if (numberList[j] < numberList[idx]) idx = j;
        }
        // 최신 자바스크립트에서 지원
        [numberList[i], numberList[idx]] = [numberList[idx], numberList[i]];
    }
    console.log(answer);
    console.log(numberList);
}



// solution 2
function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));