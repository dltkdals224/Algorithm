// 2022.10.02
function solution(name) {
  const alphabetNumArr = alphabetPosition(name).split(" ").map(Number);
  const LENGTH = name.length;

  // ▲,▼ 에 대한 모든 연산
  let verticalMoveCount = 0;
  for (let i = 0; i < LENGTH; i++) {
    if (alphabetNumArr[i] <= 14) {
      verticalMoveCount += alphabetNumArr[i] - 1;
    }
    if (alphabetNumArr[i] > 14) {
      verticalMoveCount += 27 - alphabetNumArr[i];
    }
  }

  // ◀,▶ 에 대한 모든 연산
  let leftRightCountList = [LENGTH - 1];
  for (let startOfA = 0; startOfA < LENGTH; startOfA++) {
    let endOfA = startOfA + 1;
    while (endOfA < LENGTH && name[endOfA] === "A") endOfA++;
    const [moveToStartOfA, moveToEndOfA] = [startOfA, LENGTH - endOfA];
    leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA); // 0 -> A.., 0 <- A.., ..A <- -1
    leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA); // 시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
  }

  return verticalMoveCount + Math.min(...leftRightCountList);
}

const alphabetPosition = (string) => {
  let chars = "abcdefghijklmnopqrstuvwxyz".split("");

  string = string.toLowerCase();
  let charArr = string.split("");

  return charArr
    .map(function (char) {
      return chars.indexOf(char) + 1;
    })
    .filter(function (position) {
      return position !== 0;
    })
    .join(" ");
};

// solution("JEROEN"); // 56
// solution("JAN"); // 23

// solution("BABAA"); // 4
// solution("BAAABAA"); // 5
// solution("AABAAAAB"); // 8 아니고 6
// solution("BBBAABAA"); // 9
// solution("BAABAABB"); // 9
// solution("BAABABAAAAAABAA");
