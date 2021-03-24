const fs = require('fs');

const stdin = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

{
    // input()을 호출하면 첫 번째인자 (테스트 케이스의 수)가 반환
    const numOfTestCase = parseInt(input());
    const stack = [];
    const result = [];

    const stackAction = {
        push: (element) => {
            stack.push(element);
        },
        pop: () => (stack.pop() ? result.push(stack.pop()) : result.push(-1)),
        size: () => result.push(stack.length),
        empty: () => result.push(stack.length ? 0 : 1),
        top: () => result.push(stack.length ? stack[stack.length - 1] : -1)
    };

    for (let i = 0; i < numOfTestCase; i++) {
        const [method, element] = input().split(' ');
        stackAction[method](element);
    }
    console.log(result.join('\n'));
}