// 2023.02.07
function solution(s, skip, index) {
  let answer = "";
  const STRING = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 97));

  skip.split("").forEach((word) => {
    STRING.splice(STRING.indexOf(word), 1);
  });

  const STRING_LENGTH = STRING.length;
  s.split("").forEach((word) => {
    const TARGET_IDX = STRING.indexOf(word) + index;
    if (TARGET_IDX >= STRING_LENGTH) {
      answer += STRING[TARGET_IDX % STRING_LENGTH];
    } else {
      answer += STRING[TARGET_IDX];
    }
  });

  return answer;
}

// solution("aukks", "wbqd", 5); // 'happy'
// solution("z", "abcdefghij", 20); // n
