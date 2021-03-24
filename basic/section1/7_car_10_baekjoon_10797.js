// solution 1 (baekjoon online judge 입력 기준으로 풀이)
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `3
1 2 3 5 3`).split('\n');
const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    lastDigit = "";
    carNumberList = [];
    for (let i = 0; i < 2; i++) {
        (i == 0) ? lastDigit = input(): carNumberList = input().split(' ');
    }
    result = [...carNumberList].filter(carNum => carNum === lastDigit).length;
    console.log(result);
}


// solution 2
function solution(day, arr) {
    let answer = 0;
    for (let x of arr) {
        if (x % 10 == day) answer++;
    }

    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));