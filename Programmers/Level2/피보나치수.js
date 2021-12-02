//2021.11.02
//2021.12.02 완성
// (A+B) % C === ((A % C) + (B % C)) % C를 알아야 풀 수 있다.
// 자세한 사항은 '모듈러 연산의 성질'을 검색해보자.
function solution(n) {
  var ans = [0, 1];
  if (n <= 1) return ans[n];
  for (var i = 2; i < n + 1; i++) {
    ans.push((ans[i - 2] + ans[i - 1]) % 1234567);
  }
  return ans[n];
}

// function Fibonacci(n, lastlast = 0, last = 1) {
//   if (n == 0) {
//     return lastlast;
//   } else if (n == 1) {
//     return last;
//   } else {
//     return Fibonacci(
//       n - 1,
//       last % 1234567,
//       ((lastlast % 1234567) + (last % 1234566)) % 1234567
//     );
//   }
// }
// 재귀함수는 보통 자바스크립트 엔진이 가능한 재귀호출의 깊이는 10000 이다.
// 다른 언어에서는 이러한 제한을 해제하는 방법이 존재하기도 하지만 JS는 없다.

// 존나 만만하게 봤는데
// 두가지를 배웠다.
