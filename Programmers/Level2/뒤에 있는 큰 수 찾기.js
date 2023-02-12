// test 20~23 시간 초과
function solution(numbers) {
  var answer = [];
  const LENGTH = numbers.length;

  numbers.forEach((target, idx) => {
    for (let i = idx; i < LENGTH; i++) {
      if (target < numbers[i]) {
        answer.push(numbers[i]);
        break;
      }
      if (i === LENGTH - 1) {
        answer.push(-1);
      }
    }
  });

  return answer;
}

solution([2, 3, 3, 5]); // [3, 5, 5, -1]
solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]
