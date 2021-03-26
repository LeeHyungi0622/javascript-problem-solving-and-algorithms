// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
2 3 3 1 3
1 1 2 2 3`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const numOfTestCase = Number(input());
    let firstPlayer = [];
    let secondPlayer = [];

    for (let i = 0; i < 3; i++) {
        if (i === 1) firstPlayer = input().split(' ');
        if (i === 2) secondPlayer = input().split(' ');
    }
    let result = [];
    for (let i = 0; i < numOfTestCase; i++) {
        if ((Number(firstPlayer[i]) === 1 && Number(secondPlayer[i]) === 3) ||
            (Number(firstPlayer[i]) === 3 && Number(secondPlayer[i]) === 1)) {
            if (Number(firstPlayer[i]) === 1) {
                result.push('A');
            } else {
                result.push('B');
            }
        } else {
            if (Number(firstPlayer[i]) > Number(secondPlayer[i])) {
                result.push('A');
            } else if (Number(secondPlayer[i]) > Number(firstPlayer[i])) {
                result.push('B');
            } else {
                result.push('D');
            }
        }
    }
    console.log(result.join('\n'));
}

// solution 2
function solution(a, b) {
    let answer = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) answer += "D ";
        else if (a[i] === 1 && b[i] === 3) answer += "A ";
        else if (a[i] === 2 && b[i] === 1) answer += "A ";
        else if (a[i] === 3 && b[i] === 2) answer += "A ";
        else answer += "B ";
    }

    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));