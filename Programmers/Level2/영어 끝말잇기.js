// 2022.09.19
function solution(n, words) {
  let answer = [];
  let wrongPointIndex = -1;

  // "가장 먼저 탈락"이라는 단어의 존재를 보니 여러 탈락자가 발생하는 배열이 존재할 수 있음.
  // 최초 탈락자를 탐색해야 함.

  for (let i = 0; i < words.length; i++) {
    if (func1(i, words) && func2(i, words) && func3(i, words)) {
      continue;
    }
    wrongPointIndex = i;
    break;
  }

  if (wrongPointIndex !== -1) {
    answer = [(wrongPointIndex % n) + 1, Math.floor(wrongPointIndex / n) + 1];
    return answer;
  }
  return [0, 0];
}

// 한 단어 말한쉐기 탈락
const func1 = (index, words) => {
  if (words[index].length <= 1) {
    return false;
  }
  return true;
};

// 틀린 단어 말한쉐기 탈락
const func2 = (index, words) => {
  if (index >= 1 && words[index].slice(0, 1) !== words[index - 1].slice(-1)) {
    return false;
  }
  return true;
};

// 말했던 단어 말한쉐기 탈락
const func3 = (index, words) => {
  if (words.slice(0, index).includes(words[index])) {
    return false;
  }
  return true;
};

// solution(3, ["abc", "cde", "efg", "ghi", "i", "ijk"]); // [2,2]

// solution(2, ["ab", "b", "ccc", "ddd"]);

// solution(3, [
//   "tank",
//   "kick",
//   "know",
//   "wheel",
//   "land",
//   "dream",
//   "mother",
//   "robot",
//   "tank",
// ]); // [3,3]

// solution(5, [
//   "hello",
//   "observe",
//   "effect",
//   "take",
//   "either",
//   "recognize",
//   "encourage",
//   "ensure",
//   "establish",
//   "hang",
//   "gather",
//   "refer",
//   "reference",
//   "estimate",
//   "executive",
// ]); // [0,0]

// solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]); // [1,3]

// solution(5, [
//   "hello",
//   "observe",
//   "effect",
//   "take",
//   "either",
//   "recognize",
//   "encourage",
//   "e",
//   "establish",
//   "hang",
//   "gather",
//   "refer",
//   "reference",
//   "estimate",
//   "executive",
// ]); // [3,2]
