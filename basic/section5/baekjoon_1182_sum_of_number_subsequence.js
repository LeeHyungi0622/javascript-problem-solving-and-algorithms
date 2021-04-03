// 연속 부분수열의 합

const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5 0
-7 -3 -2 5 8`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const firstInput = input().split(' ').map(number => Number(number));
    const n = firstInput[0];
    const s = firstInput[1];
    const numberList = input().split(' ').map(number => Number(number));

    let lt = 0;
    let sum = 0;
    let answer = 0;
    for (let rt = 0; rt < n; rt++) {
        sum += numberList[rt];
        if (sum === s) answer += 1;

        while (sum > s) {
            sum -= numberList[lt++];
            if (sum === s) answer += 1;
        }
    }
    console.log(answer);
}


// solution 2 (연속 부분수열이 아니어도 된다.)
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5 0
-7 -3 -2 5 8`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const firstInput = input().split(' ').map(number => +number);
    const n = firstInput[0];
    const s = firstInput[1];
    const numberList = input().split(' ').map(number => +number);
    let answer = 0;
    let dp = new Array(n).fill(null).map((v, i) => [numberList[i]]);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            for (let k = 0; k < dp[j].length; k++) {
                dp[i].push(dp[i][0] + dp[j][k]);
            }
        }
    }

    dp.forEach(row => {
        row.forEach(col => {
            if (col === s) answer += 1;
        });
    });
    console.log(answer);
}