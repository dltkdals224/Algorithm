// 2023.02.13
// test 6~10,13~16 시간 초과
// test 1~2, 5~8, 14~16 실패
// test 6, 14~16 실패
// 통과
function solution(arr) {
  let tmpObj = {
    0: 0,
    1: 0,
  };

  const ARR_LENGTH = arr.length;
  for (let t = 2; t <= ARR_LENGTH; t *= 2) {
    for (let i = 0; i < ARR_LENGTH; i += t) {
      for (let j = 0; j < ARR_LENGTH; j += t) {
        const TARGET_VALUE = arr[i][j];
        const COMPRESSION_LENGTH = t / 2;

        if (
          COMPRESSION_LENGTH === 1 &&
          TARGET_VALUE === arr[i][j + COMPRESSION_LENGTH] &&
          TARGET_VALUE === arr[i + COMPRESSION_LENGTH][j] &&
          TARGET_VALUE === arr[i + COMPRESSION_LENGTH][j + COMPRESSION_LENGTH]
        ) {
          arr[i][j + COMPRESSION_LENGTH] = -1;
          arr[i + COMPRESSION_LENGTH][j] = -1;
          arr[i + COMPRESSION_LENGTH][j + COMPRESSION_LENGTH] = -1;
          arr[i][j] = [TARGET_VALUE, t];
        } else if (COMPRESSION_LENGTH === 1) {
          arr[i][j] = [TARGET_VALUE, 1];
        }

        if (
          typeof TARGET_VALUE !== "number" &&
          TARGET_VALUE[0] === arr[i][j + COMPRESSION_LENGTH][0] &&
          TARGET_VALUE[0] === arr[i + COMPRESSION_LENGTH][j][0] &&
          TARGET_VALUE[0] ===
            arr[i + COMPRESSION_LENGTH][j + COMPRESSION_LENGTH][0] &&
          TARGET_VALUE[1] === COMPRESSION_LENGTH &&
          TARGET_VALUE[1] === arr[i][j + COMPRESSION_LENGTH][1] &&
          TARGET_VALUE[1] === arr[i + COMPRESSION_LENGTH][j][1] &&
          TARGET_VALUE[1] ===
            arr[i + COMPRESSION_LENGTH][j + COMPRESSION_LENGTH][1]
        ) {
          arr[i][j + COMPRESSION_LENGTH] = -1;
          arr[i + COMPRESSION_LENGTH][j] = -1;
          arr[i + COMPRESSION_LENGTH][j + COMPRESSION_LENGTH] = -1;
          arr[i][j] = [TARGET_VALUE[0], t];
        }
      }
    }
  }

  arr.forEach((row) => {
    row.forEach((target) => {
      if (typeof target == "number") {
        if (target === 0) {
          tmpObj[0]++;
        }
        if (target === 1) {
          tmpObj[1]++;
        }
      } else {
        if (target[0] === 0) {
          tmpObj[0]++;
        }
        if (target[0] === 1) {
          tmpObj[1]++;
        }
      }
    });
  });

  return [tmpObj[0], tmpObj[1]];
}

// solution([
//   [0, 1, 1, 1, 0, 1, 1, 1],
//   [1, 0, 1, 1, 1, 0, 1, 1],
//   [1, 1, 0, 1, 1, 1, 0, 1],
//   [1, 1, 1, 0, 1, 1, 1, 0],
//   [0, 1, 1, 1, 0, 1, 1, 1],
//   [1, 0, 1, 1, 1, 0, 1, 1],
//   [1, 1, 0, 1, 1, 1, 0, 1],
//   [1, 1, 1, 0, 1, 1, 1, 0],
// ]); // [16, 24]

// solution([
//   [1, 1, 0, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 1, 1, 1],
// ]); // [4,9]

// solution([
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
// ]); // [10,15]

// solution([
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
// ]); // [10, 12]

// solution([
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
// ]); // [0, 1]

// solution([
//   [1, 1, 1, 1],
//   [1, 0, 0, 1],
//   [1, 0, 0, 1],
//   [1, 1, 1, 1],
// ]); // [4, 12]

// solution([
//   [1, 1, 1, 0],
//   [1, 1, 0, 0],
//   [1, 0, 1, 1],
//   [0, 0, 1, 1],
// ]); // [5, 2]
