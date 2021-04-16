// solution1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
2 7
1 3
1 2
2 5
3 6`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfAxis = Number(input());
    let axisList = [];
    for (let i = 0; i < numOfAxis; i++) {
        axisList.push(input().split(' ').map(v => +v));
    }
    let result = '';
    axisList.sort((f, s) => {
        if (f[0] === s[0]) {
            return f[1] - s[1];
        }
        return f[0] - s[0];
    }).forEach(axis => {
        result += `${axis[0]} ${axis[1]}\n`;
    });
    console.log(result);
}

// solution2
function solution(arr) {
    let answer = arr;
    arr.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    });
    return answer;
}

let arr = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6]
];
console.log(solution(arr));