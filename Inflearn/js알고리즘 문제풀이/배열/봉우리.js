// 2022. 08. 21
function solution(arr) {
  let answer = 0;

  const settingArr = settingField(arr);
  settingArr.map((v, i) => {
    v.map((v2, j) => {
      if (
        v2 > settingArr[i][j + 1] &&
        v2 > settingArr[i + 1][j] &&
        v2 > settingArr[i][j - 1] &&
        v2 > settingArr[i - 1][j]
      ) {
        answer++;
      }
    });
  });

  return answer;
}

const settingField = (arr) => {
  const LENGTH = arr.length;
  for (let i = 0; i < LENGTH; i++) {
    arr[i].unshift(0);
    arr[i].push(0);
  }

  const TMP_ARR = [...Array(LENGTH + 2)].map((x) => 0);
  arr.unshift(TMP_ARR);
  arr.push(TMP_ARR);

  return arr;
};

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr)); // 10
