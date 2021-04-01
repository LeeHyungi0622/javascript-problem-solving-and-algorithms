//solution 1

const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `10 3
13 15 34 23 45 65 33 11 26 42`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const firstInput = input().split(' ').map(number => Number(number));
    const numOfNumbers = firstInput[0];
    const nthBiggestNumber = firstInput[1];
    const numberList = input().split(' ').map(number => Number(number));

    let sumOfNumbersList = new Set();
    for (let i = 0; i < numOfNumbers; i++) {
        for (let j = i + 1; j < numOfNumbers; j++) {
            for (let k = j + 1; k < numOfNumbers; k++) {
                sumOfNumbersList.add(numberList[i] + numberList[j] + numberList[k]);
            }
        }
    }
    const sortedNumberList = [...sumOfNumbersList].sort((f, s) => s - f);
    console.log(sortedNumberList[nthBiggestNumber - 1]);
}

// solution 2
function solution(n, k, card) {
    let answer;
    let tmp = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                tmp.add(card[i] + card[j] + card[k]);
            }
        }
    }
    let a = Array.from(tmp).sort((a, b) => b - a);
    answer = a[k - 1];
    return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));