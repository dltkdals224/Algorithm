// 2022.08.30
function solution(arr1, arr2) {
  let answer = [];
  let TMP_ARR = [];

  TMP_ARR = arr1.concat(arr2);

  answer = TMP_ARR.sort((a, b) => {
    return a - b;
  });

  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
