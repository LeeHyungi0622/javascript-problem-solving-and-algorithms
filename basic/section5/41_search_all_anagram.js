// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `bacaAacba
abc`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    // input stirng
    const is = input();
    // search string
    const ss = input();
    const checkAnagram = (f, s) => {
        const fm = new Map();
        for (let w of f) {
            if (fm.has(w)) fm.set(w, fm.get(w) + 1);
            else fm.set(w, 1);
        }
        for (let w of s) {
            if (!fm.has(w) || fm.get(w) === 0) return false;
            else fm.set(w, fm.get(w) - 1);
        }
        return true;
    }

    let count = 0;
    let checkString = is.slice(0, 3);
    // console.log(checkString);
    if (checkAnagram(ss, checkString)) count += 1;
    for (let i = ss.length; i < is.length; i++) {
        checkString += is[i];
        const slicedString = checkString.slice(i - ss.length + 1, i + 1);
        //console.log(slicedString);
        if (checkAnagram(ss, slicedString)) count += 1;
    }
    console.log(count);
}

// solution 2
function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}

function solution(s, t) {
    let answer = 0;
    let tH = new Map();
    let sH = new Map();
    for (let x of t) {
        if (tH.has(x)) tH.set(x, tH.get(x) + 1);
        else tH.set(x, 1);
    }
    let len = t.length - 1;
    for (let i = 0; i < len; i++) {
        if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
        else sH.set(s[i], 1);
    }
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
        if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
        else sH.set(s[rt], 1);
        if (compareMaps(sH, tH)) answer++;
        sH.set(s[lt], sH.get(s[lt]) - 1);
        if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
        lt++;
    }
    return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));