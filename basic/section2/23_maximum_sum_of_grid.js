// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfColumnsAndRows = Number(input());
    let grid = [];
    let maxSumOfRows = Number.MIN_SAFE_INTEGER;
    let maxSumOfColumns = Number.MIN_SAFE_INTEGER;
    let maxSumOfCross = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i <= numOfColumnsAndRows; i++) {
        if (i >= 1) {
            grid.push(input().split(' ').map(number => Number(number)));
        }
    }
    let sumOfLeftCross = 0;
    let sumOfRightCross = 0;
    for (let i = 0; i < numOfColumnsAndRows; i++) {
        let sumOfRows = 0;
        let sumOfColumns = 0;
        for (let j = 0; j < numOfColumnsAndRows; j++) {
            sumOfRows += grid[i][j];
            sumOfColumns += grid[j][i];
            if (j === i) {
                sumOfLeftCross += grid[i][j];
            }
            if (j === 4 - i) {
                sumOfRightCross += grid[i][j];
            }
        }
        if (sumOfRows > maxSumOfRows) maxSumOfRows = sumOfRows;
        if (sumOfColumns > maxSumOfColumns) maxSumOfColumns = sumOfColumns;
        maxSumOfCross = Math.max(sumOfLeftCross, sumOfRightCross);
    }
    console.log(Math.max(maxSumOfRows, maxSumOfColumns, maxSumOfCross));
}

// solution 2
function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 = sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }
    sum1 = sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];
console.log(solution(arr));