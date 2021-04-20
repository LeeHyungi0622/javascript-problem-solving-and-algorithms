// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `8 32
23 87 65 12 57 32 99 81`).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    const [numOfNumbers, targetNumber] = input().split(' ').map(n => +n);
    const numberList = input().split(' ').map(n => +n);
    // 이분 검색을 위한 리스트 오름차순 정렬 
    numberList.sort((f, s) => f - s);
    let low = 0;
    let high = numberList.length - 1;
    let mid = Math.floor((low + high) / 2);
    while (targetNumber !== numberList[mid]) {
        if (targetNumber < numberList[mid]) {
            high = mid - 1;
            mid = Math.floor((low + high) / 2);
        } else {
            low = mid + 1;
            mid = Math.floor((low + high) / 2);
        }
    }
    console.log(mid + 1);
}

// solution 2
{
    function solution(target, arr) {
        // 이분 탐색을 위한 리스트의 오름차순 정렬
        arr.sort((f, s) => f - s);
        let low = 0;
        let high = arr.length - 1;
        let mid = Math.floor((low + high) / 2);
        while (arr[mid] !== target) {
            if (target < arr[mid]) {
                high = mid - 1;
                mid = Math.floor((low + high) / 2);
            } else {
                low = mid + 1;
                mid = Math.floor((low + high) / 2);
            }
        }
        return mid + 1;
    }

    let arr = [23, 87, 65, 12, 57, 32, 99, 81];
    console.log(solution(32, arr));
}

//solution 3
{
    function solution(target, arr) {
        let answer;
        arr.sort((a, b) => a - b);
        let lt = 0,
            rt = arr.length - 1;
        while (lt <= rt) {
            let mid = parseInt((lt + rt) / 2);
            if (arr[mid] === target) {
                answer = mid + 1;
                break;
            } else if (arr[mid] > target) rt = mid - 1;
            else lt = mid + 1;
        }

        return answer;
    }

    let arr = [23, 87, 65, 12, 57, 32, 99, 81];
    console.log(solution(32, arr));
}