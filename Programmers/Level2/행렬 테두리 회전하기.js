// Brute Force
function solution(rows, columns, queries) {
  var answer = [];

  const FIELD = Array.from({ length: rows }, (_, rowIdx) =>
    Array.from(
      { length: columns },
      (_, columnIdx) => rowIdx * rows + columnIdx + 1
    )
  );
  console.log(FIELD);

  queries.forEach((arr) => {
    const x1 = arr[0] - 1,
      y1 = arr[1] - 1,
      x2 = arr[2] - 1,
      y2 = arr[3] - 1;

    const LENGTH = Math.abs(x2 - x1);
    const HEIGHT = Math.abs(y2 - y1);

    for (let i = 0; i < LENGTH; i++) {
      const TARGET = FIELD[x2].splice(y1, 1);
    }
  });

  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]); // [8, 10, 25]
