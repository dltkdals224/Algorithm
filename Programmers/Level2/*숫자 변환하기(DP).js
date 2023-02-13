// 2023.02.13
// 재귀호출 풀이 => 런타임 에러 발생
function solution(x, y, n) {
  const DP = {};
  if (x === y) {
    return 0;
  }

  // DP의 value가 depth(= 최적연산 횟수)
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

solution(10, 20, 5); // 1
solution(10, 40, 5); // 2
solution(10, 40, 30); // 1
solution(2, 5, 4); // -1
