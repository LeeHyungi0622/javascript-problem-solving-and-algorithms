// 주어진 거리로 몇 개의 마구간 구간을 분리할 수 있는지 확인하는 함수
function check(stable, mid) {
    let cnt = 1;
    let ep = stable[0];
    for (let i = 1; i < stable.length; i++) {
        // 만약 i와 ep의 차 값이 mid 값 이상인 경우, 
        if (stable[i] - ep >= mid) {
            // 마구간 나뉘는 구간 1++
            cnt += 1;
            // ep를 stable[i]로 shift
            ep = stable[i];
        }
    }
    return cnt;
}

function solution(c, stable) {
    let answer;
    // 마구간 리스트 정렬
    stable.sort((f, s) => f - s);
    let lt = 1;
    let rt = stable[stable.length - 1];

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        // 주어진 마구간 사이의 거리 (mid)가 총 c마리의 말을 배치할
        // 수 있는 조건인지 확인 (나뉘는 분기점이 c 이상인지 체크)
        if (check(stable, mid) >= c) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    // 우선 마구간 리스트에서 마구간 간의 최소 거리 ~ 최대 거리 리스트 정의
    return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));