// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5 9
1 2 3 2 6 2 3 5 7`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const [cacheSize, numOfTask] = input().split(' ').map(n => +n);
    const taskList = input().split(' ').map(n => +n);

    // console.log(cacheSize, numOfTask);
    // console.log(taskList);
    let task = [];
    for (let t of taskList) {
        if (task.includes(t)) {
            task.pop(task.indexOf(t));
            task.unshift(t);
        } else {
            if (task.length < cacheSize) {
                task.unshift(t);
            } else {
                task.pop();
                task.unshift(t);
            }
        }
    }
    console.log(task.join(' '));
}

// solution 2
function solution(size, arr) {
    let answer = Array.from({ length: 5 }, () => 0);
    arr.forEach(x => {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            // 값 x가 answer[i]의 값과 일치(값이 존재)
            if (x === answer[i]) {
                // pos에 해당 위치 index를 저장
                pos = i;
            }
        }
        // 만약에 작업 x가 answer에 존재하지 않는다면, 
        // pos의 값은 초기값 그대로 유지
        if (pos === -1) {
            // 오른쪽으로 한 칸씩 당겨서 처리한다.
            for (let i = size - 1; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
            // 오른쪽으로 한 칸씩 당겼기 때문에 맨 왼쪽에는 비어있다.
            // 따라서 맨 왼쪽 index [0]에 새로운 작업 x를 넣어준다.
        } else {
            // hit난 지점에서부터 한 칸씩 당겨준다.(맨 앞으로)
            for (let i = pos; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        }
        answer[0] = x;
    });

    return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// solution 3
function solution3(size, arr) {
    let answer = [];
    arr.forEach(x => {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            // 값 x가 answer[i]의 값과 일치(값이 존재)
            if (x === answer[i]) {
                // pos에 해당 위치 index를 저장
                pos = i;
            }
        }
        // 만약에 작업 x가 answer에 존재하지 않는다면, 
        // pos의 값은 초기값 그대로 유지
        if (pos === -1) {
            answer.unshift(x);
            if (answer.length > size) answer.pop();
        } else {
            // hit지점에서부터 1개 삭제
            answer.splice(pos, 1);
            answer.unshift(x);
        }
    });

    return answer;
}

let arr3 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution3(5, arr3));