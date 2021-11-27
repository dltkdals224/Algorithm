//2021.11.02
//2021.11.27 재도전
// (A+B) % C === ((A % C) + (B % C)) % C를 알아야 풀 수 있다.
// 자세한 사항은 '모듈러 연산의 성질'을 검색해보자.
function solution(n) {
  let ans = -1;

  ans = Fibonacci(n);
  console.log(ans);

  return ans;
}

function Fibonacci(n, lastlast = 0, last = 1) {
  if (n == 0) {
    return lastlast;
  } else if (n == 1) {
    return last;
  } else {
    return Fibonacci(
      n - 1,
      last % 1234567,
      ((lastlast % 1234567) + (last % 1234566)) % 1234567
    );
  }
}

// 아직 해결이 안됨
