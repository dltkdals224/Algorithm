// 2022. 08. 21
function solution(arr) {
  let answer = 0;
  let stk = 0;

  arr.forEach((v) => {
    if (v === 0) {
      stk = 0;
    }
    if (v === 1) {
      answer += 1 + stk;
      stk++;
    }
  });

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // 10
