// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `abaCC
Caaab`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const fi = input();
    const si = input();
    const fm = new Map();
    const sm = new Map();
    for (let w of fi) {
        if (fm.has(w)) fm.set(w, fm.get(w) + 1);
        else fm.set(w, 1);
    }
    for (let w of si) {
        if (sm.has(w)) sm.set(w, sm.get(w) + 1);
        else sm.set(w, 1);
    }
    let count = 0;
    for (let [k, v] of fm) {
        if (sm.has(k)) {
            if (sm.get(k) === v) count += 1;
        }
    }
    if (count === fm.size) console.log('YES');
    else console.log('NO');
}


// solution2
function solution(str1, str2) {
    let answer = "YES";
    let sH = new Map();
    for (let x of str1) {
        if (sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }
    for (let x of str2) {
        if (!sH.has(x) || sH.get(x) == 0) return "NO";
        sH.set(x, sH.get(x) - 1);
    }
    return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));