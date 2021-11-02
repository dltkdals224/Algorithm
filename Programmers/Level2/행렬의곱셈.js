//2021.11.01
function solution(arr1, arr2) {
  let rows = arr1.length;
  let columns = arr2[0].length;

  let arr = [[]];
  let tmp = 0;

  //ans 배열 생성
  Array.matrix = function (m, n, initial) {
    var a,
      i,
      j,
      mat = [];
    for (i = 0; i < m; i += 1) {
      a = [];
      for (j = 0; j < n; j += 1) {
        a[j] = initial;
      }
      mat[i] = a;
    }
    return mat;
  };
  arr = Array.matrix(rows, columns, 0);
  console.log(arr);

  //3중 for문 사용하는게 맞는듯.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      for (let k = 0; k < columns; k++) {
        tmp += arr1[i][k] * arr2[k][j];
      }
      arr[i][j] = tmp;
      tmp = 0;
    }
  }

  console.log(arr);
  return arr;
}

//시발 왜 런타임 에러
