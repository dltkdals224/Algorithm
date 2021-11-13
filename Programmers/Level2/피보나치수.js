//2021.11.02
function solution(n) {
  let ans = -1;

  function Fibonacci(n) {
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
  //30분정도 추가 고민해 보았지만 딱히 보이지 않음

  ans = Fibonacci(n) % 1234567;
  console.log(ans);

  return ans;
}
