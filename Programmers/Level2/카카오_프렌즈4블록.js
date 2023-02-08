function solution(m, n, board) {
  let answer = 0;

  const TARGET_BOARD = board.map((arr) => arr.split(""));
  const TRANSPOSE_TARGET_BOARD = transpose(TARGET_BOARD);

  while (true) {
    const DELETE_CRITERIA = [];

    // find
    for (let i = 0; i < TRANSPOSE_TARGET_BOARD.length - 1; i++) {
      for (let j = 0; j < TRANSPOSE_TARGET_BOARD[0].length - 1; j++) {
        const TARGET = TRANSPOSE_TARGET_BOARD[i][j];

        if (
          TARGET !== -1 &&
          TRANSPOSE_TARGET_BOARD[i][j + 1] === TARGET &&
          TRANSPOSE_TARGET_BOARD[i + 1][j] === TARGET &&
          TRANSPOSE_TARGET_BOARD[i + 1][j + 1] === TARGET
        ) {
          DELETE_CRITERIA.push(
            `${i}${j}`,
            `${i}${j + 1}`,
            `${i + 1}${j}`,
            `${i + 1}${j + 1}`
          );
        }
      }
    }

    if (DELETE_CRITERIA.length === 0) {
      break;
    }

    // make_unique
    const set = new Set(DELETE_CRITERIA);
    const UNIQUE_DELETE_CRITERIA = [...set];
    const REVERSE_UNIQUE_DELETE_CRITERIA = UNIQUE_DELETE_CRITERIA.map(
      (string) => string.split("").reverse().join("")
    );
    const TARGET_UNIQUE_DELETE_CRITERIA =
      REVERSE_UNIQUE_DELETE_CRITERIA.sort().map((string) =>
        string.split("").reverse().join("")
      );

    // delete
    Array.from(TARGET_UNIQUE_DELETE_CRITERIA).forEach((string) => {
      TRANSPOSE_TARGET_BOARD[string[0]].splice(string[1], 1);
      TRANSPOSE_TARGET_BOARD[string[0]].unshift(-1);
      answer++;
    });
  }

  return answer;
}

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((e, i) => [...(result[i] || []), e]),
    []
  );

solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]); // 14
solution(8, 4, ["FAAF", "FBBF", "FCCF", "FCCF", "FBBF", "FAAF"]); // 12
solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]); // 15
solution(6, 6, ["IIIIOO", "IIIOOO", "IIIOOI", "IOOIII", "OOOIII", "OOIIII"]); // 32
solution(7, 2, ["AA", "BB", "AA", "BB", "ZZ", "ZZ", "CC"]); // 4
solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]); // 24
solution(2, 2, ["AA", "AA"]); // 4
solution(3, 2, ["aa", "aa", "ab"]);
solution(6, 6, ["AABBEE", "AAAEEE", "VAAEEV", "AABBEE", "AACCEE", "VVCCEE"]); // 32
solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]); // 24
