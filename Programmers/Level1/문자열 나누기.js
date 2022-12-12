// 2022.12.12
function solution(s) {
  let answer = 0;
  let stack = [];

  s.split("").forEach((v) => {
    if (stack.length === 0) {
      stack.push(v);
      return;
    }

    if (stack[0] === v) {
      stack.push(v);
      return;
    }
    if (stack[0] !== v) {
      stack.pop(v);
    }

    if (stack.length === 0) {
      answer++;
    }
  });

  if (stack.length !== 0) {
    answer++;
  }

  return answer;
}

// solution("banana"); // 3
// solution("abracadabra"); // 6
// solution("aaabbaccccabba"); // 3
