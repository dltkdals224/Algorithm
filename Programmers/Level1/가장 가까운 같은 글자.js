// 2022.12.12
function solution(s) {
  let answer = [];

  s.split("").forEach((value, idx) => {
    const targetIndex = s.slice(0, idx).lastIndexOf(value);
    if (targetIndex === -1) {
      answer.push(targetIndex);
    }
    if (targetIndex !== -1) {
      answer.push(idx - targetIndex);
    }
  });

  return answer;
}

// solution("banana"); // [-1, -1, -1, 2, 2, 2]
// solution("foobar"); // [-1, -1, 1, -1, -1, -1]
