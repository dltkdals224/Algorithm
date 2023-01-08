// 2023.01.08
function solution(board) {
  const DP_BOARD = [...board];

  // DP TABLE
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i === 0 || j === 0) {
        continue;
      } else {
        if (
          DP_BOARD[i - 1][j - 1] !== 0 &&
          DP_BOARD[i - 1][j] !== 0 &&
          DP_BOARD[i][j - 1] !== 0 &&
          DP_BOARD[i][j] !== 0
        ) {
          const TARGET_VALUE = board[i - 1][j - 1];
          if (
            TARGET_VALUE === board[i - 1][j] &&
            TARGET_VALUE === board[i][j - 1]
          ) {
            DP_BOARD[i][j] = TARGET_VALUE + 1;
          } else {
            DP_BOARD[i][j] =
              Math.min(
                DP_BOARD[i - 1][j - 1],
                DP_BOARD[i - 1][j],
                DP_BOARD[i][j - 1]
              ) + 1;
          }
        } else {
          continue;
        }
      }
    }
  }

  return (
    DP_BOARD.reduce((prev, next) => Math.max(prev, Math.max(...next)), 0) ** 2
  );
}

// solution([[0], [0]]);

// solution([
//   [1, 0],
//   [0, 0],
//   [0, 0],
//   [0, 0],
// ]); //1

// solution([
//   [1, 1, 1, 1],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1],
// ]); // 9

// solution([
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 1, 0],
// ]);
// //9

// solution([
//   [0, 0, 1, 1],
//   [1, 1, 1, 1],
// ]);
// //4
