//solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `(A(BC)D)EF(G(H)(IJ)K)LM(N)`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const inputStr = input();
    let op = 0;
    let cp = 0;
    let leftStack = [];
    let rightStack = [];
    for (let s of inputStr) {
        if (s === '(') op += 1;
        else if (s === ')') cp += 1;
        if (/^[a-zA-Z]$/.test(s)) {
            if (op > cp) leftStack.push(s);
            else if (op === cp) rightStack.push(s);
        }
    }
    console.log(rightStack.join(''));
}

//solution 2
function solution(s) {
    let answer;
    let stack = [];
    for (let x of s) {
        if (x === ')') {
            while (stack.pop() !== '(');
        } else stack.push(x);
    }
    answer = stack.join('');
    return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));