// 그리디의 대표적인 문제 

function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER;
    let time = [];
    for (let t of times) {
        time.push([t[0], 's']);
        time.push([t[1], 'e']);
    }
    time.sort((s, e) => {
        if (s[0] === e[0]) {
            return s[1].charCodeAt() - e[1].charCodeAt();
        }
        return s[0] - e[0];
    });
    let cnt = 0;
    for (let t of time) {
        if (t[1] === 's') cnt += 1;
        else cnt -= 1;
        // 피로연장에 동시에 존재하는 "최대 인원" 구하기
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
];
console.log(solution(arr));