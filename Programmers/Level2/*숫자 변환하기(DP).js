// 2023.02.13
// 재귀호출 풀이 => 런타임 에러 발생
// Brute Force를 통해서도 해결 가능? / 역접근을 통한 Greedy로는 불가능.
function solution(x, y, n) {
  const DP = {};
  if (x === y) {
    return 0;
  }

  // DP의 value가 depth(= 최적연산 횟수)
  // DP의 자료구조가 무조건 ans와 관련되야 하는게 맞음.
  DP[x] = 0;
  let data = [x];

  while (data.length) {
    // data와 newData는 가지치기 과정.
    const newData = [];

    for (const target of data) {
      for (const innerTarget of [target + n, target * 2, target * 3]) {
        if (innerTarget > y || DP[innerTarget]) {
          continue;
        }
        if (innerTarget === y) {
          return DP[target] + 1;
        }

        DP[innerTarget] = DP[target] + 1;
        newData.push(innerTarget);

        // DP = { x+n: ++, x*2: ++, x+n: ++ }
        // newData = [x+n, x*2, x*3]
      }
    }

    data = newData;
  }

  return -1;
}

// solution(10, 20, 5); // 1
// solution(10, 40, 5); // 2
// solution(10, 40, 30); // 1
// solution(2, 5, 4); // -1
