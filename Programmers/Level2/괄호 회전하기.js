// 2022.12.29
function solution(s) {
  let answer = 0;
  const TARGET_ARR = s.split("");

  const findPair = (string) => {
    if (string === "]") return "[";
    if (string === "}") return "{";
    if (string === ")") return "(";
  };

  for (let i = 0; i < s.length; i++) {
    const STACK = [];

    if (i !== 0) {
      TARGET_ARR.push(TARGET_ARR[0]);
      TARGET_ARR.shift();
    }

    TARGET_ARR.forEach((v) => {
      if (v === "[" || v === "{" || v === "(") {
        STACK.push(v);
      } else {
        if (STACK.length === 0) {
          STACK.length = 1;
        }

        if (findPair(v) === STACK[STACK.length - 1]) {
          STACK.pop();
        } else {
          return;
        }
      }
    });

    if (STACK.length === 0) {
      answer++;
    }
  }

  return answer;
}

// solution("[](){}"); // 3
// solution("}]()[{"); // 2
// solution("}]()[][{"); // 3
// solution("[)(]"); // 0
// solution("]()["); // 2
// solution("}}}"); // 0
// solution("[(])"); // 0
