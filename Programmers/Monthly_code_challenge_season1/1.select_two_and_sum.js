function solution(numbers) {
    var answer = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const s = numbers[i] + numbers[j];
            if (!answer.includes(s)) {
                answer.push(s);
            }
        }
    }
    console.log(answer.sort((f, s) => f - s));
}

const numbers = [2, 1, 3, 4, 1];

console.log(solution(numbers));