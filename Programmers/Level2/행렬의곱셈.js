//2021.11.01
function solution(arr1, arr2) {
  let ans = [[]];
  let rows = arr1.length;
  let columns = arr2[0].length;

  let arr = [[]];
  let tmp = 0;
  let stack = 0;

  //ans 배열 생성
  function create2DArray(rows, columns) {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array(columns);
    }
    return arr;
  }
  arr = create2DArray(rows, columns);

  console.log(arr[2]);
  console.log(arr2[0][0]);
  console.log("start");

  //3중 for문 사용하는게 맞는듯.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      tmp += arr1[i][j] * arr2[j][i];
    }
    console.log(tmp);
    tmp = 0;
  }

  console.log(arr);
  return ans;
}

solution(
  [
    [1, 2, 1],
    [3, 2, 1],
    [4, 1, 1],
    [2, 5, 1],
  ],
  [
    [3, 3, 2],
    [3, 3, 1],
    [1, 1, 1],
  ]
);
