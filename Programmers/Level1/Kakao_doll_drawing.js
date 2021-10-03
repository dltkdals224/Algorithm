//2021.10.03
// 정확성 테스트 1,2 결점 - 해결필요
function solution(board, moves) {
  let ans = 0;
  let basket = [];

  //집기
  function catchItem(tmp) {
    for (let t = 0; t < board.length; t++) {
      //집을것이 없다
      if (board[t][tmp - 1] == 0);
      else {
        //집을것이 있다
        basket.push(board[t][tmp - 1]);
        board[t].splice(tmp - 1, 1, 0);
        return 0;
      }
    }
  }

  //함수 호출 후 집기과정.
  for (let n = 0; n < moves.length; n++) catchItem(moves[n]);
  console.log(basket);

  //같은 원소 팡!
  for (let n = 0; n < basket.length; n++) {
    if (basket[n] == basket[n + 1]) {
      basket.splice(n, 2);
      ans += 2;
      n = 0;
    } else;
  }

  console.log(ans);
  return ans;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
  4
);

solution(
  [
    [0, 0, 0, 0, 0, 5],
    [0, 0, 1, 0, 3, 5],
    [0, 2, 5, 0, 1, 4],
    [4, 2, 4, 4, 2, 2],
    [3, 5, 1, 3, 1, 1],
    [3, 5, 1, 3, 1, 1],
  ],
  [3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6]
);
