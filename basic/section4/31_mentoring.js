// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `4 3
3 4 1 2
4 3 2 1
3 1 4 2`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    let firstInput = input();
    const numOfStudents = firstInput.split(' ')[0];
    const numOfTests = firstInput.split(' ')[1];
    let testList = [];
    let answer = 0;
    for (let k = 0; k <= numOfTests; k++) {
        if (k > 0) testList.push(input().split(' ').map(number => Number(number)));
    }
    console.log(testList);
    for (let i = 1; i <= numOfStudents; i++) {
        for (let j = 1; j <= numOfStudents; j++) {
            let cnt = 0;
            for (let k = 0; k < numOfTests; k++) {
                let pi, pj = 0;
                for (let s = 0; s < numOfStudents; s++) {
                    // 등수 넣기
                    if (testList[k][s] === i) pi = s;
                    if (testList[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === +numOfTests) {
                answer++;
            }
        }
    }
    console.log(answer);
}


// solution 2
function solution(test) {
    let answer = 0;
    m = test.length;
    n = test[0].length;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            // k: test 시행 수
            for (let k = 0; k < m; k++) {
                let pi = pj = 0;
                // s: 등수
                for (let s = 0; s < n; s++) {
                    // i, j번째 학생의 등수 결정
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }
                // pi: mentor, pj: mentee
                // mentor, mentee 성립
                if (pi < pj) cnt++;
            }
            // 만약에 테스트 시행 수와 cnt된 값(mentor, mentee성립 수)이 일치한다면
            // mentor, mentee가 될 수 있는 필요충분 조건을 만족한다.
            if (cnt === m) answer++;
        }
    }
    return answer;
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
];
console.log(solution(arr));