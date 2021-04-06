const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `352+*9-`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const ex = input();
    let stack = [];
    for (let e of ex) {
        if (!isNaN(e)) stack.push(+e);
        else {
            const lo = stack.pop();
            const ro = stack.pop();
            if (e === '+') stack.push(ro + lo);
            else if (e === '-') stack.push(ro - lo);
            else if (e === '*') stack.push(ro * lo);
            else if (e === '/') stack.push(ro / lo);
        }
    }
    console.log(stack[0]);
}