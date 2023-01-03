// 2023.01.02
function solution(k, tangerine) {
  let answer = 0;
  const TANGERINE_MAP_OBJ = new Map();

  tangerine.forEach((target) => {
    TANGERINE_MAP_OBJ.set(target, (TANGERINE_MAP_OBJ.get(target) || 0) + 1);
  });
  const TMP = [...TANGERINE_MAP_OBJ];
  const SORTED_TANGERINE_MAP_OBJ = new Map(
    TMP.sort((a, b) => {
      return b[1] - a[1];
    })
  );

  let sum = 0;
  for (let target of SORTED_TANGERINE_MAP_OBJ) {
    sum += target[1];
    answer++;

    if (sum >= k) {
      break;
    }
  }

  return answer;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]); // 3
solution(4, [1, 3, 2, 5, 4, 5, 2, 3]); // 2
solution(2, [1, 1, 1, 1, 2, 2, 2, 3]); // 1

// 다른사람의 풀이

// Map객체 까지 쓸 필요가 없음을 보여줌.

// function solution(k, tangerine) {
//   let answer = 0;
//   const tDict = {};
//   tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
//   const tArr = Object.values(tDict).sort((a, b) => b - a);
//   for (const t of tArr) {
//     answer++;
//     if (k > t) k -= t;
//     else break;
//   }
//   return answer;
// }
