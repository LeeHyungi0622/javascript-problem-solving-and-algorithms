// solution 1
const fs = require('fs');
const getInput = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5 3 7 11 2 15 17`).split('\n');

const input = (() => {
    let line = 0;
    return () => getInput[line++];
})();

{
    const inputList = input().split(' ');
    console.log(Math.min(...inputList));
}

// solution 2
function solution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));