const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `8 3`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const [numOfPrince, targetNum] = input().split(' ').map(n => +n);

    // const princeList = new Array(numOfPrince).fill().map((v, i) => i + 1);
    const queue = Array.from({ length: numOfPrince }, (v, i) => i + 1);
    let answer;

    while (queue.length) {
        for (let i = 1; i < targetNum; i++) queue.push(queue.shift());
        queue.shift();
        if (queue.length === 1) answer = queue.shift();
    }
    console.log(answer);
}