const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `8
1 2 3 -3 -2 5 6 -6`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfNumbers = Number(input());
    const numberList = input().split(' ').map(n => +n);

    for (let i = 0; i < numberList.length; i++) {
        for (let j = 0; j < numberList.length - i - 1; j++) {
            if (numberList[j] > 0 && numberList[j + 1] < 0) {
                [numberList[j], numberList[j + 1]] = [numberList[j + 1], numberList[j]];
            }
        }
    }
    console.log(numberList.join(' '));
}