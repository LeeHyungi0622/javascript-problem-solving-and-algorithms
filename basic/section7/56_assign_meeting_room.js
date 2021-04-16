// solution1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
1 4
2 3
3 5
4 6
5 7`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfMeeting = Number(input());
    let meetingList = [];
    for (let i = 0; i < numOfMeeting; i++) {
        meetingList.push(input().split(' ').map(n => +n));
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < meetingList.length; i++) {
        let cnt = 1;
        let startMeeting = meetingList[i];
        for (let j = 0; j < meetingList.length; j++) {
            if (i !== j) {
                if (startMeeting[1] === meetingList[j][0]) {
                    startMeeting = meetingList[j];
                    cnt += 1;
                }
            }
        }
        if (cnt > max) {
            max = cnt;
        }
    }
    console.log(max);
}

// solution2
function solution(meeting) {
    let answer = 0;
    meeting.sort((f, s) => {
        if (f[1] === s[1]) {
            return f[0] - s[0];
        }
        return f[1] - s[1];
    });
    let et = Number.MIN_SAFE_INTEGER;
    for (let x of meeting) {
        // 회의의 시작시간이 끝난 시간이상인 경우,
        if (x[0] >= et) {
            answer++;
            // 회의 끝나는 시간을 업데이트
            et = x[1];
        }
    }

    return answer;
}

let arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7]
];
console.log(solution(arr));


// solution 3
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
1 4
2 3
3 5
4 6
5 7`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const numOfMeeting = Number(input());
    let meetingList = [];
    for (let i = 0; i < numOfMeeting; i++) {
        meetingList.push(input().split(' ').map(n => +n));
    }

    meetingList.sort((f, s) => {
        if (f[1] === s[1]) {
            return f[0] - s[0];
        }
        return f[1] - s[1];
    });
    let answer = 0;
    let endTime = Number.MIN_SAFE_INTEGER;
    for (let meeting of meetingList) {
        if (meeting[0] >= endTime) {
            answer += 1;
            endTime = meeting[1];
        }
    }
    console.log(answer);
}