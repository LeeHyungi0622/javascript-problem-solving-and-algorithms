function solution(n) {
    function recursiveFunc(n) {
        if (n === 0) {
            return;
        }
        console.log(n);
        recursiveFunc(n - 1);
        console.log(n);
    }
    recursiveFunc(n);
}

// solution(3);



// solution 2
function sampleSolution1(n) {
    function DFS(L) {
        if (L === 0) return;
        else {
            console.log(L);
            DFS(L - 1);
        }
    }
    DFS(n);
}

sampleSolution1(3);
/**
 * 3
 * 2
 * 1
 */

// solution 3
function sampleSolution2(n) {
    function DFS(L) {
        if (L === 0) return;
        else {
            DFS(L - 1);
            console.log(L);
        }
    }
    DFS(n);
}

sampleSolution2(3);
/**
 * 1
 * 2
 * 3
 */