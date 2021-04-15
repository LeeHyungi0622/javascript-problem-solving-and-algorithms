// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `6
11 7 5 6 10 9`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})(); {
    const numOfNumbers = Number(input());
    const numberList = input().split(' ').map(n => +n);

    for (let i = 1; i < numberList.length; i++) {
        let key = numberList[i];
        let j = i - 1;
        while (j >= 0 && key < numberList[j]) {
            numberList[j + 1] = numberList[j];
            j--;
        }
        numberList[j + 1] = key;
    }
    console.log(numberList);
}

// solution 2
function solution(arr) {
    let answer = arr;
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > tmp) arr[j + 1] = arr[j];
            else break;
        }
        arr[j + 1] = tmp

    }
    return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));