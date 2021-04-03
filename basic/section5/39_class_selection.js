// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `15
BACBACCACCBDEDE`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfSelection = parseInt(input());
    const selectionList = input().split('');
    const selectionMap = new Map();
    for (let vote of selectionList) {
        if (selectionMap.has(vote)) selectionMap.set(vote, selectionMap.get(vote) + 1)
        else selectionMap.set(vote, 1);
    }
    console.log(selectionMap);
    let max = Number.MIN_SAFE_INTEGER;
    let selectedStudent = '';
    for (let [k, v] of selectionMap) {
        if (v > max) {
            max = v;
            selectedStudent = k;
        }
    }
    console.log(selectedStudent);
}