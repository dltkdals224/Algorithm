//2021.10.03
// 정확성 테스트 1,2 결점 - 해결필요
function solution(board, moves) {
  let ans = 0;
  let basket = [];
  basket.push(0);

  //집기
  function catchItem(tmp) {
    for (let t = 0; t < board.length; t++) {
      //집을것이 없다
      if (board[t][tmp - 1] == 0);
      else {
        //집을것이 있다
        basket.push(board[t][tmp - 1]);
        board[t].splice(tmp - 1, 1, 0);
        break;
      }
    }
  }

  //함수 호출 후 집기과정.
  for (let n = 0; n < moves.length; n++) catchItem(moves[n]);
  // console.log(basket);

  //팡!
  for (let n = 0; n < basket.length; n++) {
    if (basket[n] == basket[n + 1]) {
      basket.splice(n, 2);
      ans += 2;
      n = 0;
      continue;
    } else continue;
  }

  // console.log(ans);
  return ans;
}

//New Information
//.splice(a,b,c)

//문제 핵심 풀이법
//basket에 0을 하나 넣어놔야 아무것도 없을때 오류가 나지 않는다.
