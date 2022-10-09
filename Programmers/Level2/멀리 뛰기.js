// 2022.10.9
function solution(n) {
  let ans = [1, 1];

  if (n <= 1) {
    return ans[n];
  }

  for (let i = 2; i < n + 1; i++) {
    ans.push((ans[i - 2] + ans[i - 1]) % 1234567);
  }

  return ans[n];
}

// 2xN 타일링 문제와 마찬가지로 '피보나치의 둔갑'유형
