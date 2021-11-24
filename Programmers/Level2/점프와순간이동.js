// 2021.11.25
// 의외로 존나 쉬운문제 였음
function solution(n) {
  let ans = 1;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
      ans++;
    }
  }

  return ans;
}
