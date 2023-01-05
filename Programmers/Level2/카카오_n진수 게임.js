// 2023.01.05
function solution(n, t, m, p) {
  let answer = "";
  let targetString = "";

  for (let i = 0; targetString.length < t * m; i++) {
    targetString += i.toString(n).toUpperCase();
  }

  for (let i = p - 1; answer.length < t; i += m) {
    answer += targetString[i];
  }

  return answer;
}

// solution(2, 4, 2, 1); // "0111"
// solution(16, 16, 2, 1); // "02468ACE11111111"
// solution(16, 16, 2, 2); // "13579BDF01234567"
