// 2022. 08. 21
function solution(arr) {
  const ARR_LENGTH = arr.length;
  const EACH_MAX_VALUE = [];
  let tmp = [];

  // 행
  arr.map((row) => {
    tmp.push(
      row.reduce((acc, cur) => {
        return acc + cur;
      })
    );
    return tmp;
  });
  EACH_MAX_VALUE.push(Math.max(...tmp));
  tmp = [];

  // 열
  arr.map((v, i) => {
    let sum = 0;
    for (let i = 0; i < ARR_LENGTH; i++) {
      sum += v[i];
    }
    tmp.push(sum);
  });
  EACH_MAX_VALUE.push(Math.max(...tmp));
  tmp = [];

  // 대각선
  let sum = 0;
  for (let i = 0; i < ARR_LENGTH; i++) {
    sum += arr[i][i];
  }
  tmp.push(sum);
  sum = 0;
  for (let i = 0; i < ARR_LENGTH; i++) {
    sum += arr[i][ARR_LENGTH - i - 1];
  }
  tmp.push(sum);
  EACH_MAX_VALUE.push(Math.max(...tmp));

  return Math.max(...EACH_MAX_VALUE);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 155
