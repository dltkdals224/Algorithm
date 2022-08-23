// 2022. 08. 20
function solution(a, b) {
  const NUMBER_OF_GAME = a.length;
  let answer = "";

  for (let i = 0; i < NUMBER_OF_GAME; i++) {
    answer += findWinner(a[i], b[i]);
  }

  return answer;
}

const findWinner = (a, b) => {
  if (a === b) {
    return "D";
  }
  if (a - b === 1 || a - b === -2) {
    return "A";
  }
  if (b - a === 1 || b - a === -2) {
    return "B";
  }
};

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
// A B A B D
