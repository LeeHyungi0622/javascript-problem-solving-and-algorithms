// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
87 89 92 100 76`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const sizeOfScoreList = input();
    let scoreList = [];
    for (let i = 0; i < 2; i++) {
        if (i === 1) scoreList = input().split(' ').map(number => Number(number));
    }
    const sortedList = [...scoreList].sort((f, s) => f - s).reverse();
    let result = [];
    for (let p of scoreList) {
        result.push(sortedList.indexOf(p) + 1);
    }
    console.log(result.join(' '));
}

// solution 2
function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) answer[i]++;
        }
    }
    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));