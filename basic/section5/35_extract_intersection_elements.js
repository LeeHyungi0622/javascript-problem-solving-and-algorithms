// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
1 3 9 5 2
5
3 2 5 7 8`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const n = Number(input());
    const nList = input().split(' ').map(number => Number(number));
    const m = Number(input());
    const mList = input().split(' ').map(number => Number(number));
    const nSet = new Set(nList);
    const mSet = new Set(mList);

    const intersectionSet = new Set(
        [...nSet].filter(number => mSet.has(number))
    )
    console.log([...intersectionSet].sort((f, s) => f - s).join(' '));
}

//solution 2
function solution(arr1, arr2) {
    let answer = [];
    arr1.sort();
    arr2.sort();
    let p1 = p2 = 0;
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else if (arr1[p1] < arr2[p2]) p1++;
        else p2++;
    }
    return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));