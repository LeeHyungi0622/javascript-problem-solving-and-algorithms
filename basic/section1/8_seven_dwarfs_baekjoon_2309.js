// solution 1 (baekjoon online judge 입력 기준으로 풀이)
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() : `20
7
23
19
10
15
25
8
13
`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    let dwarfsList = [];
    for (let i = 0; i < 9; i++) {
        dwarfsList.push(input());
    }
    const sum = dwarfsList.reduce((acc, cur) => acc + Number(cur), 0);
    for (let i = 0; i < 7; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - (parseInt(dwarfsList[i]) + parseInt(dwarfsList[j])) === 100) {
                dwarfsList.splice(j, 1);
                dwarfsList.splice(i, 1);
            }
        }
    }
    console.log(dwarfsList.sort((f, s) => f - s).join('\n'));
}

// solution 2
function solution(arr) {
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if ((sum - (answer[i] + answer[j])) == 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));