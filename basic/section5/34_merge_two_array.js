// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `3
1 3 5
5
2 3 6 7 9`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const n = Number(input());
    const nList = input().split(' ').map(number => Number(number));
    const m = Number(input());
    const mList = input().split(' ').map(number => Number(number));

    // console.log([...nList, ...mList].sort((f, s) => f - s).join(' '));
}


// solution 2
function solution(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;
    while (p1 < n && p2 < m) {
        if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }
    while (p1 < n) answer.push(arr1[p1++]);
    while (p2 < m) answer.push(arr2[p2++]);
    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b).join(' '));