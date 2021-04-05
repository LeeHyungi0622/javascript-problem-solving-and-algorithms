// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `(()(()))(()`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const p = input();
    let leftStack = [];
    let rightStack = [];
    for (let w of p) {
        if (w === '(') leftStack.push(w);
        if (w === ')') rightStack.push(w);
    }
    if (leftStack.length === rightStack.length) console.log('YES');
    else console.log('NO');
}

// solution 2
function solution(s) {
    let answer = "YES";
    stack = [];
    for (let x of s) {
        if (x === '(') stack.push(x);
        else {
            if (stack.length === 0) return "NO";
            stack.pop();
        }
    }
    if (stack.length > 0) return "NO";
    return answer;
}

let a = "(()(()))(()";
console.log(solution(a));