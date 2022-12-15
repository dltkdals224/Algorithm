// 2022.12.15
function solution(k, m, score) {
  let ans = 0;

  score.sort((a, b) => {
    return b - a;
  });
  for (let i = 1; i <= Math.floor(score.length / m); i++) {
    ans += m * score[i * m - 1];
  }

  return ans;
}

// solution(3, 4, [1, 2, 3, 1, 2, 3, 1]); // 8
// solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
