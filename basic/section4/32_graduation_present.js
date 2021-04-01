// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5 28
6 6
2 2
4 3
4 5
10 3`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    let firstInput = input().split(' ');
    let numOfStudents = firstInput[0];
    let buget = firstInput[1];
    let studentsOrder = [];

    for (let i = 0; i <= numOfStudents; i++) {
        if (i > 0) {
            studentsOrder.push(input().split(' ').map(number => Number(number)));
        }
    }

    let sortedList = studentsOrder.sort((f, s) => (f[0] + f[1]) - (s[0] + s[1]));
    sortedList[sortedList.length - 1] = [sortedList[sortedList.length - 1][0] / 2, sortedList[sortedList.length - 1][1]];
    sortedList.sort((f, s) => (f[0] + f[1]) - (s[0] + s[1]));
    let sumOfPrice = 0;
    let count = 0;
    let validStudentList = [];
    for (const s of sortedList) {
        sumOfPrice += (s[0] + s[1]);
        if (sumOfPrice <= buget) {
            count += 1;
            validStudentList.push(s);
        }
    }
    console.log(count);
    // console.log(validStudentList);
}

// solution 2

function solution(m, product) {
    let answer = 0;
    let n = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    for (let i = 0; i < n; i++) {
        // 원래의 예산에서 i번째 상품가격을 반값으로 해서 배송비와 더한 값과 빼준다. 
        // 상품가격은 짝수로만 입력되기 때문에 2로 나눠도 소수점으로 떨어지지 않는다.
        let money = m - (product[i][0] / 2 + product[i][1]);
        let cnt = 1;
        // 남은 상품을 i번째 상품(할인상품)을 제외한 상품을 검사한다.
        for (let j = 0; j < n; j++) {
            // 더한 값이 예산보다 크다면 프로그램을 종료한다.
            if (j !== i && (product[j][0] + product[j][1]) > money) break;
            // 상품을 살 수 있는 경우 (상품가격과 배송비의 합이 예산보다 작은 경우)
            if (j !== i && (product[j][0] + product[j][1]) <= money) {
                // 예산에서 (상품가격 + 배송비)를 빼준다.
                money -= (product[j][0] + product[j][1]);
                // 살수 있는 경우의 수를 증가시킨다.
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3]
];
console.log(solution(28, arr));