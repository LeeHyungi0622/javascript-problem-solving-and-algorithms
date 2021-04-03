// solution 1 (Time complexity - O(N^2))
// const fs = require('fs');
// const stdin = (process.platform === 'linux' ?
//     fs.readFileSync('/dev/stdin').toString() :
//     `10 3
// 12 15 11 20 25 10 20 19 13 15`).split('\n');
// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// {
//     const [n, k] = input().split(' ').map(number => +number);
//     const salesList = input().split(' ').map(number => +number);

//     let sumList = [];
//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = 0; j < k; j++) {
//             if (i + j < n) {
//                 sum += salesList[i + j];
//                 sumList.push(sum);
//             }
//         }
//     }
//     console.log(Math.max(...sumList));
// }

// solution 2 (Time complexity - O(N))
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `10 3
12 15 11 20 25 10 20 19 13 15`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const [n, k] = input().split(' ').map(n => +n);
    const numberList = input().split(' ').map(n => +n);
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += numberList[i];
    // 첫 번째 3일을 더한 값을 초기화
    answer = sum;
    for (let i = k; i < numberList.length; i++) {
        sum += (numberList[i] - numberList[i - k]);
        answer = Math.max(answer, sum);
    }
    console.log(answer);
}

//solution 2
function solution(k, arr) {
    let sum = 0;
    let answer = 0;
    for (let i = 0; i < 3; i++) sum += arr[i];
    answer = sum
    for (let j = k; j < arr.length; j++) {
        sum += (arr[j] - arr[j - k]);
        answer = Math.max(sum, answer);
    }
    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));