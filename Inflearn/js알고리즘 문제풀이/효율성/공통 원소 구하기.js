// 2022.08.27
function solution(arr1, arr2) {
  let answer = [];

  quickSort(arr1).map((v) => {
    quickSort(arr2).map((v2) => {
      if (v === v2) {
        answer.push(v);
      }
    });
  });

  return answer;
}

// quick sort 방법과 메소드 구현 방식을 기억해 둘 것.
function quickSort(arr) {
  // arr의 요소가 하나면, arr를 그대로 반환
  if (arr.length < 2) {
    return arr;
  }

  // quickSort 초기 배열을 선언 첫 pivot 배열의 첫 번째 요소.
  let pivot = [arr[0]];
  let left = [];
  let right = [];

  // for문을 돌면서 pivot보다 작은 것은 왼쪽 큰 것은 오른쪽 그렇지 않은 것은 pivot에 삽입.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }
  // quickSort 진행상황을 단계별로 보여주기 위한 코드
  // console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);

  // 재귀함수 구조.
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
// 2 3 5
