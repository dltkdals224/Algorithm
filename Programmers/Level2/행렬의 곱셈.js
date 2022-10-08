//2022.10.08
function solution(arr1, arr2) {
  const ansArr = Array.from(Array(arr1.length), () => {
    return new Array(arr2[0].length);
  });

  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let elem = 0;
      for (let k = 0; k < arr2.length; k++) {
        elem += arr1[i][k] * arr2[k][j];
      }
      ansArr[i][j] = elem;
    }
  }

  return ansArr;
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
