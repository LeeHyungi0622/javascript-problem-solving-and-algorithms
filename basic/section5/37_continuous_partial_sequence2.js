// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5 5
1 3 1 2 3`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const firstInput = input().split(' ').map(number => Number(number));
    const numOfNumbers = firstInput[0];
    const targetSum = firstInput[1];
    const numberList = input().split(' ').map(number => Number(number));

    let lt = sum = count = 0;
    for (let rt = 0; rt < numOfNumbers; rt++) {
        sum += numberList[rt];
        while (sum > targetSum) {
            sum -= numberList[lt++];
        }
        count += (rt - lt + 1);
    }
    console.log(count);
}

// solution 2
function solution(m, arr) {
    let answer = 0,
        sum = 0,
        lt = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        while (sum > m) {
            sum -= arr[lt++];
        }
        answer += (rt - lt + 1);
    }
    return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));