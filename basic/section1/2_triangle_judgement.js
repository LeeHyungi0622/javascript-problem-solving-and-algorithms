// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `13 33 17`).split('\n');

const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const lengthArr = input().split(' ').sort();
    console.log(parseInt(lengthArr[0]) + parseInt(lengthArr[1]) > parseInt(lengthArr[2]) ?
        'YES' : 'NO');
}

// solution 2
function solution(a, b, c) {
    let answer = "YES",
        max;
    let tot = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    if (tot - max <= max) answer = "NO";
    return answer;
}

console.log(solution(13, 33, 17));