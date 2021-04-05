// solution 1
{
    const boardArr = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
    ];
    const moveArr = [1, 5, 3, 5, 1, 2, 1, 4];
    let answer = 0;
    let basketStack = [];
    for (let k = 0; k < moveArr.length; k++) {
        const m = moveArr[k] - 1;
        let checked = false;
        for (let j = 0; j < boardArr.length; j++) {
            if (boardArr[j][m] !== 0 && checked === false) {
                basketStack.push(boardArr[j][m]);
                boardArr[j][m] = 0;
                checked = true;
                if (basketStack.length > 1) {
                    if (basketStack[basketStack.length - 1] === basketStack[basketStack.length - 2]) {
                        basketStack.pop();
                        basketStack.pop();
                        answer += 2;
                    }
                }
            }
        }
        console.log(basketStack);
    }
    console.log(answer);
}

// solution 2
function solution(board, moves) {
    let answer = 0;
    let stack = [];
    moves.forEach(pos => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][pos - 1] !== 0) {
                let tmp = board[i][pos - 1];
                board[i][pos - 1] = 0;
                // tmp에 넣은 인형은 아직 넣지 않는다.
                if (tmp === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(tmp);
                break;
            }
        }
    });

    return answer;
}

let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));