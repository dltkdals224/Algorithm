//2021.11.02
function solution(n) {
  let ans = -1;

  function Fibonacci(n) {
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return Fibonacci(n - 1) + Fibonacci(n - 2);
  }

  ans = Fibonacci(n) % 1234567;
  console.log(ans);

  return ans;
}
