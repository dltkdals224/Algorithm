// 2022. 08. 20
function solution(arr) {
  let answer = [];

  answer.push(arr[0]);
  arr.map((v, i) => {
    if (v > arr[i - 1]) {
      answer.push(v);
    }
  });

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
// 7 9 6 12
