// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `8 6
1 2 1 3 1 1 1 2`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const firstInput = input().split(' ');
    const numOfNumbers = Number(firstInput[0]);
    const sumOfNumbers = Number(firstInput[1]);
    const numberList = input().split(' ').map(number => Number(number));

    let p1 = p2 = 0;
    let sum = 0;
    let count = 0;
    let sumNumberList = [];
    let numberCombine = [];
    while (p1 < numOfNumbers) {
        if (sum <= sumOfNumbers) {
            if (sum === sumOfNumbers) {
                sumNumberList.push(numberCombine);
                numberCombine = [];
                count++;
            }
            numberCombine.push(numberList[p1]);
            sum += numberList[p1++];

        } else {
            numberCombine = [];
            sum = 0;
            p2++;
            p1 = p2;
        }
    }
    console.log(count);
    console.log(sumNumberList);
}

// solution 2
function solution(m, arr) {
    let answer = 0,
        lt = 0,
        sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === m) answer++;
        // 더해준 합계(sum)의 값이 특정 숫자 m과 같거나 큰 경우
        while (sum >= m) {
            // 더해준 합계(sum)에서 lt가 가르키고 있는 숫자를 빼주고
            sum -= arr[lt++];
            // 빼준 결과의 sum이 특정 숫자 m과 같은 경우, answer을 증가시켜준다.
            if (sum === m) answer++;
        }
    }
    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));