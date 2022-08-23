// 2022.08.23
function solution(string, target) {
  let answer = [];
  let targetIndex = [];

  let idx = 0;
  while (idx !== -1) {
    string.indexOf(target, idx + 1) !== -1 &&
      targetIndex.push(string.indexOf(target, idx + 1));
    idx = string.indexOf(target, idx + 1);
  }

  // 문자열의 길이가 100을 넘지 않아 치명적이지 않지만 시간복잡도가 O(n^2)로 불리하다.
  string.split("").map((_, stringIndex) => {
    answer += ` ${Math.min(
      ...targetIndex.map((targetValue) => {
        return Math.abs(stringIndex - targetValue);
      })
    )}`;
  });

  return answer.trim();
}

console.log(solution("teachermode", "e"));
console.log(solution("sang min lee", "e"));

// 답안

// function solution(s, t) {
//   let answer = [];
//   let p = 1000;
//   for (let x of s) {
//     if (x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }
//   p = 1000;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) p = 0;
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }
//   return answer;
// }
