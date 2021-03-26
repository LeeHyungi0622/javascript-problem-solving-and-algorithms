// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `found7, time: study; Yduts: emit, 7Dnuof`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const checkPalindrome = (word) => {
        word = word.replace(/ /g, "");
        if (word.length <= 1) {
            return 'YES';
        }

        if (word[0].toUpperCase() === word[word.length - 1].toUpperCase()) {
            return checkPalindrome(word.slice(1, -1));
        } else {
            return 'NO';
        }
    }
    const word = input();
    console.log(checkPalindrome(word));
}

// solution 2
function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (s[i] != s[len - i - 1]) return "NO";
    }
    return answer;
}

let str = "goooG";
console.log(solution(str));