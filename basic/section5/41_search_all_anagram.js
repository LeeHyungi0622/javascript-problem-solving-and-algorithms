// solution 1 (Sliding window + Map + slice methodㅇㄹ)
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

// solution 2 (Sliding window + Map + Two pointer algorithm)

// 두 개의 map을 인자로 받아서 사이즈를 비교한다. 두 map의 key속성 길이(size)가 다르다면
// 비교하는 것이 의미가 없기 때문에 false를 반환한다.
// 길이가 같다면 첫 번째 인자로 받은 map1의 key, value를 순회하며 map2에 같은 key가 존재하는지,
// 존재한다면 해당 key값이 가지는 value가 map2에서의 key값의 value와 일치하는지 확인한다.
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
    // s문자열에서 index 0부터 비교문자열 t의 길이-1만큼(우선 앞의 2개만) sH에 업데이트해준다. 
    for (let i = 0; i < len; i++) {
        if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
        else sH.set(s[i], 1);
    }

    let lt = 0;
    // 빼고 => 추가하고 => 비교 (반복)
    for (let rt = len; rt < s.length; rt++) {
        // 새로 추가하는 문자(처음에는 문자 'c')가 기존의 sH에 존재한다면 해당 요소의 값을 1증가 시켜준다.
        if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
        // 그렇지 않다면 default value를 1로 해서 요소를 추가한다.
        else sH.set(s[rt], 1);
        // compareMaps에 sH와 tH를 인수로 넘겨서 호출을 해서 true를 반환할 경우 answer값을 1증가 시킨다. 
        if (compareMaps(sH, tH)) answer++;
        // sH에서 lt index위치에 해당하는 key의 값에서 1만큼 빼준다. (오른쪽으로 sliding window)
        sH.set(s[lt], sH.get(s[lt]) - 1);
        // 만약에 값을 뺀 뒤에 해당 lt index위치의 값이 0이 되는 경우, sH Map에서 해당 값을 delete해준다.
        if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
        // lt index의 값을 1 증가시켜준다.
        lt++;
    }
    return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));