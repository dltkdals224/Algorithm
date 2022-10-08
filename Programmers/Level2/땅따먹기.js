// 2022.10.08
function solution(land) {
  cumulativeLand = [...land];

  cumulativeLand.map((row, index) => {
    if (index !== 0) {
      let targetArr = [];

      for (let i = 0; i < row.length; i++) {
        let tmp = cumulativeLand[index - 1][i];
        cumulativeLand[index - 1][i] = -1;
        targetArr.push(row[i] + Math.max(...cumulativeLand[index - 1]));
        cumulativeLand[index - 1][i] = tmp;
      }

      cumulativeLand[index] = targetArr;
    }
  });

  return Math.max(...cumulativeLand[cumulativeLand.length - 1]);
}

// solution([
//   [1, 2, 3, 5],
//   [5, 6, 7, 8],
//   [4, 3, 2, 1],
// ]); // 16

// solution([
//   [1, 2, 3, 5],
//   [5, 6, 7, 100],
//   [4, 3, 2, 1],
// ]); // 107

// 후기
// 누적합에 대한 혁신적인 접근을 알게 됨.
// 이전[i-1] 행에 대하여 -1 처리를 해놓고 최대합을 찾아 누적시켜 나아가는 방식.
