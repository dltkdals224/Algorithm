// 2022. 08. 21
function solution(arr) {
  let n = arr.length;

  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 기준보다 잘 본 사람이 있으면 기준의 등수를 뒤로 미룸.
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  // 각 기준에 대해서만 생각하면 편하게 풀이할 수 있음.
  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
// 4 3 2 1 5

console.log(solution([100, 100, 100, 98, 70]));
// 1 1 1 4 5
