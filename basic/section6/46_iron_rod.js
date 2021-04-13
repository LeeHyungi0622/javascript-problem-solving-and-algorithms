const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `()(((()())(())()))(())`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const lasor = input();
    console.log(lasor);

    let stack = [];
    let answer = 0;
    for (let i = 0; i < lasor.length; i++) {
        if (lasor[i] === '(') stack.push(lasor[i]);
        else {
            stack.pop()
            if (lasor[i - 1] === '(') {
                answer += stack.length;
            } else {
                answer += 1;
            }
        }
    }
    console.log(answer);
}