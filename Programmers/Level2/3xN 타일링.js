// 2023.02.14
const MOD = 1000000007;

function solution(n) {
  const dp = [0, 3, 11];

  if (n % 2 === 1) {
    return 0;
  }

  while (dp.length < n) {
    const CURRENT_IDX = dp.length;
    dp.push(
      (((dp[CURRENT_IDX - 1] * 4) % MOD) - (dp[CURRENT_IDX - 2] % MOD) + MOD) %
        MOD
    );
  }

  return dp[n / 2];
}

solution(2); // 3
solution(4); // 11
solution(6); // 41
solution(8); // 153
solution(14);
solution(4000);

// f(n) = ((f(n - 2) x 4 % 1,000,000,007) - (f(n - 4) % 1,000,000,007) + 1,000,000,007) % 1,000,000,007
