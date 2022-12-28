// 2022.12.28
function solution(s) {
  let answer = [];

  // 배열화 1
  const TARGET_STRING = s.slice(2, -2).split("},{");
  const TARGET_ARRAY = [];

  // 배열화 2
  TARGET_STRING.forEach((string) => {
    TARGET_ARRAY.push(string.split(","));
  });

  // 정렬
  TARGET_ARRAY.sort((a, b) => {
    return a.length - b.length;
  });

  // 정복
  TARGET_ARRAY.forEach((array, idx) => {
    if (idx === 0) {
      answer.push(Number(...array));
    }
    if (idx !== TARGET_ARRAY.length - 1) {
      answer.push(
        Number(
          ...TARGET_ARRAY[idx + 1].filter((x) => {
            return !array.includes(x);
          })
        )
      );
    }
  });

  return answer;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"); // [2,1,3,4]
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"); // [2,1,3,4]
