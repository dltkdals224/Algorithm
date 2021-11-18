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

  return arr;
}

// 코테에서 런타임 에러가 발생하는 이유들
/*
1. 배열에 할당된 크기를 넘어서 접근했을 때
2. 전역 배열의 크기가 메모리 제한을 초과할 때
3. 지역 배열의 크기가 스택 크기 제한을 넘어갈 때
4. 0으로 나눌 떄
5. 라이브러리에서 예외를 발생시켰을 때
6. 재귀 호출이 너무 깊어질 때
7. 이미 해제된 메모리를 또 참조할 때
8. 프로그램(main 함수)이 0이 아닌 수를 반환했을 때
*/
