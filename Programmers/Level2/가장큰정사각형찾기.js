//2021.11.21
function solution(board) {
  let ans = 1234;
  maximumLength = 1;

  ans = board.map((elem, index) => {
    return elem.map((elem, index) => {
      elem === 1;
    }).index;
  });

  console.log(ans);
  return ans;
}

solution([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
]);
//9

solution([
  [0, 0, 1, 1],
  [1, 1, 1, 1],
]);
//4
