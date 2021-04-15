// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `CBA
CBDAGE`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const essentialSubject = input().split('');
    const appliedSubject = input().split('');

    let matched = [];
    for (let s of appliedSubject) {
        if (essentialSubject.includes(s)) {
            matched.push(s);
        }
    }

    if (essentialSubject.join('') === matched.join('')) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

// solution 2
function solution(need, plan) {
    let answer = "YES";
    let queue = need.split('');
    for (let x of plan) {
        if (queue.includes(x)) {
            // 조건문의 queue에서 shift()를 하기 때문에
            // 판별하는 과정에서 주어진 queue에서 shift가 된다.
            if (x !== queue.shift()) {
                return 'NO';
            }
        }
    }
    if (queue.length > 0) return 'NO';
    return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));