// 1부터 n까지의 원소를 갖는 집합의 부분집합 구하기
function solution(n) {
    let answer = [];
    // 지나간 정점을 구분하기 위해서 길이가 n인 check 배열 생성(1부터 n개까지 표시하기 위해서 n+1)
    let ch = Array.from({ length: n + 1 }, () => 0);

    // v = 1 (시작점)
    function DFS(v) {
        // n은 solution의 인자값 3이기 때문에
        // v(vertex)가 4일때 D(4)만 조건문에 만족한다.
        if (v === n + 1) {
            //부분집합 완성할때마
            let tmp = "";
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 1) tmp += i + " ";
            }
            if (tmp.length > 0) answer.push(tmp.trim());
        } else {
            ch[v] = 1;
            // 정점의 왼쪽 가지치기
            DFS(v + 1);
            ch[v] = 0;
            // 정점의 오른쪽 가지치기
            DFS(v + 1);
        }
    }
    // v = 1 (시작점)
    DFS(1);
    return answer;
}

console.log(solution(3));