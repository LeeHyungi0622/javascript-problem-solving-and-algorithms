const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `9 3
1 2 3 4 5 6 7 8 9`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    let answer = 0;
    const [numOfSongs, numOfDvd] = input().split(' ').map(n => +n);
    const timeList = input().split(' ').map(n => +n);

    let lt = Math.max(...timeList);
    let rt = timeList.reduce((acc, n) => acc + n, 0);

    function count(songTimeList, capacity) {
        let cnt = 1;
        let sum = 0;
        for (let s of songTimeList) {
            if (sum + s > capacity) {
                cnt += 1;
                sum = s;
            } else {
                sum += s;
            }
        }
        return cnt;
    }

    for (let i = lt; i <= rt; i++) {
        let mid = Math.floor((lt + rt) / 2);
        if (count(timeList, mid) <= numOfDvd) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    console.log(answer);
}

// solution 2
//capacity : mid값을 넘겨준다.
function count(songs, capacity) {
    let cnt = 1,
        sum = 0;
    for (let x of songs) {
        if (sum + x > capacity) {
            cnt++;
            sum = x;
        } else {
            sum += x;
        }
    }
    return cnt;
}

function solution(m, songs) {
    let answer;
    let lt = Math.max(...songs);
    let rt = songs.reduce((acc, num) => acc + num, 0);
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        // m장 이하로 앨범 곡이 전부 수록이 된다면
        if (count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));