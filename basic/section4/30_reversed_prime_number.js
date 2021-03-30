// solution 1
const fs = require('fs');
const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `9
32 55 62 20 250 370 200 30 100`).split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    let numOfNumbers = 0;
    let numberList = [];
    for (let i = 0; i < 2; i++) {
        if (i === 0) numOfNumbers = Number(input());
        if (i === 1) numberList = input().split(' ').map(number => Number(number));
    }

    console.log(numberList);
    // reversed된 number값을 기존의 numberList에 업데이트 해주기 위해서
    // index로 접근
    for (let i = 0; i < numberList.length; i++) {
        let reversedNumber = '';
        let temp = numberList[i];
        while (temp) {
            reversedNumber += temp % 10;
            temp = Math.floor(temp / 10);
        }
        numberList[i] = Number(reversedNumber);
    }
    let primeNumberList = [];
    for (let number of numberList) {
        let zeroRemainderCount = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                zeroRemainderCount += 1;
            }
        }
        if (zeroRemainderCount === 2) primeNumberList.push(number);
    }
    console.log(primeNumberList.join(' '));
}


// solution 2
function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(arr) {
    let answer = [];
    for (let x of arr) {
        let res = 0;
        while (x) {
            let t = x % 10;
            res = res * 10 + t;
            x = parseInt(x / 10);
        }
        if (isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));


// solution 3
function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(arr) {
    let answer = [];
    for (let x of arr) {
        let res = Number(x.toString().split('').reverse().join(''));
        if (isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));