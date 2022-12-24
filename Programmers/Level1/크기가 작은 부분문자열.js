// 2022.12.24
function solution(t, p) {
  let answer = 0;
  const TARGET_STRING_LENGTH = p.length;

  for (let i = 0; i <= t.length - TARGET_STRING_LENGTH; i++) {
    if (Number(t.substr(i, TARGET_STRING_LENGTH)) <= Number(p)) {
      answer++;
    }
  }

  return answer;
}

solution("3141592", "271"); // 2
solution("500220839878", "7"); // 8
