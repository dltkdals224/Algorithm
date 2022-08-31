// 2022.08.30
function solution(m, arr) {
  let answer = 0;
  const ARR_LENGTH = arr.length;

  let tmp = 0;
  let targetIndex = 0;
  for (let i = 0; i < ARR_LENGTH; i++) {
    tmp += arr[i];

    if (tmp === m) {
      tmp = 0;
      i = ++targetIndex - 1;

      answer++;
    }
    if (tmp > m) {
      tmp = 0;
      i = ++targetIndex - 1;
    }
  }

  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
console.log(solution(4, [1, 1, 2, 1, 1, 2]));
