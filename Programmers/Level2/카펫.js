// 2022.09.20
// 방정식 풀이의 교본?
function solution(brown, yellow) {
  let answer = [];

  // 가로 * 세로 = yellow
  // 2가로 + 2세로 + 4 = brown

  for (let i = 1; i <= brown; i++) {
    if (2 * Math.pow(i, 2) + 2 * yellow + (4 - brown) * i === 0) {
      answer.push(i + 2);
      break;
    }
  }

  for (let i = 0; i <= yellow; i++) {
    if ((answer[0] - 2) * i === yellow) {
      answer.push(i + 2);
    }
  }

  answer.sort((a, b) => {
    return b - a;
  });

  return answer;
}
