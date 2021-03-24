// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `12 77 38 41 53 92 85`).split('\n');

const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const numberList = input().split(' ');
    const oddNumberList = [...numberList].filter(number => number % 2 !== 0);
    const result = [];
    result.push(oddNumberList.reduce((acc, cur) => acc + Number(cur), 0));
    result.push(Math.min(...oddNumberList));
    console.log(result.join('\n'));
}

// solution 2
function solution(arr) {
    let answer = [];
    let sum = 0,
        min = 1000;
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x;
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr).join('\n'));