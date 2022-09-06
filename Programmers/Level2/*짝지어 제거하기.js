// 2022.09.06
// 정답 1
function solution(s) {
  let answer = -1;
  let notPairStack = [];
  const stringLength = s.length;

  for (let i = 0; i < stringLength; i++) {
    notPairStack[notPairStack.length - 1] === s[i]
      ? notPairStack.pop()
      : notPairStack.push(s[i]);
  }

  answer = notPairStack.length === 0 ? 1 : 0;
  return answer;
}
// 임의의 stack(notPairStack)에 값을 집어넣으며 비교하는 방식.
// 문자열의 첫번째 값은 무조건 들어감.
// 이후 문자열부터는 비교를 통해 일치하면 stack에서 제거하고 일치하지 않으면 넣으며 다음 target과 비교함.

// 정답 2
function solution(s) {
  let answer = -1;
  let notPairStack = [];
  notPairStack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (notPairStack[notPairStack.length - 1] === s[i]) {
      notPairStack.pop();
    } else {
      notPairStack.push(s[i]);
    }
  }
  answer = notPairStack.length === 0 ? 1 : 0;
  return answer;
}
