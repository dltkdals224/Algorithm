// 2022. 08. 20
function solution(arr) {
  let answer = 1;
  let maxHeight = arr[0];

  arr.map((v) => {
    if (v > maxHeight) {
      answer++;
      maxHeight = v;
    }
  });

  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
