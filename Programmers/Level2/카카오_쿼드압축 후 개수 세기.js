// test 6~10,13~16 시간 초과
function solution(arr) {
  let tmpObj = {
    0: 0,
    1: 0,
  };
  arr.forEach((row) => {
    row.forEach((value) => {
      tmpObj[value]++;
    });
  });

  const ARR_LENGTH = arr.length;
  const COMPRESSION_STATUS_TYPE0 = new Map();
  const COMPRESSION_STATUS_TYPE1 = new Map();

  for (let t = 2; t <= ARR_LENGTH; t *= 2) {
    for (let i = 0; i < ARR_LENGTH; i += t) {
      for (let j = 0; j < ARR_LENGTH; j += t) {
        const TARGET_VALUE = arr[i][j];

        if (t === 2) {
          if (
            TARGET_VALUE === arr[i][j + 1] &&
            TARGET_VALUE === arr[i + 1][j] &&
            TARGET_VALUE === arr[i + 1][j + 1]
          ) {
            if (TARGET_VALUE === 0) {
              COMPRESSION_STATUS_TYPE0.set(t, [
                ...(COMPRESSION_STATUS_TYPE0.get(t) || []),
                `${i}${j}`,
              ]);
            }
            if (TARGET_VALUE === 1) {
              COMPRESSION_STATUS_TYPE1.set(t, [
                ...(COMPRESSION_STATUS_TYPE1.get(t) || []),
                `${i}${j}`,
              ]);
            }
            tmpObj[TARGET_VALUE] -= 3;
          }
        } else {
          if (
            TARGET_VALUE === 0 &&
            COMPRESSION_STATUS_TYPE0.get(t / 2)?.includes(`${i}${j}`) &&
            COMPRESSION_STATUS_TYPE0.get(t / 2)?.includes(`${i}${j + t / 2}`) &&
            COMPRESSION_STATUS_TYPE0.get(t / 2)?.includes(`${i + t / 2}${j}`) &&
            COMPRESSION_STATUS_TYPE0.get(t / 2)?.includes(
              `${i + t / 2}${j + t / 2}`
            )
          ) {
            COMPRESSION_STATUS_TYPE0.set(t, [
              ...(COMPRESSION_STATUS_TYPE0.get(t) || []),
              `${i}${j}`,
            ]);
            tmpObj[TARGET_VALUE] -= 3;
          }
          if (
            TARGET_VALUE === 1 &&
            COMPRESSION_STATUS_TYPE1.get(t / 2)?.includes(`${i}${j}`) &&
            COMPRESSION_STATUS_TYPE1.get(t / 2)?.includes(`${i}${j + t / 2}`) &&
            COMPRESSION_STATUS_TYPE1.get(t / 2)?.includes(`${i + t / 2}${j}`) &&
            COMPRESSION_STATUS_TYPE1.get(t / 2)?.includes(
              `${i + t / 2}${j + t / 2}`
            )
          ) {
            COMPRESSION_STATUS_TYPE1.set(t, [
              ...(COMPRESSION_STATUS_TYPE1.get(t) || []),
              `${i}${j}`,
            ]);
            tmpObj[TARGET_VALUE] -= 3;
          }
        }
      }
    }
  }

  return [tmpObj[0], tmpObj[1]];
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]); // [4,9]

solution([
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]); // [10,15]
