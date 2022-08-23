// 2022.08.23
function solution(str) {
  return Number(str.replace(/[^0-9$]/g, ""));
}

console.log(solution("g0en2T0s8eSoft"));
console.log(solution("sang10min10Lee10"));

// parseInt()와 toString()에 대해서도 알아두도록.

// function solution(str) {
//   let answer = "";
//   for (let x of str) {
//     // isNaN(숫자) === false
//     // isNaN(숫자외의 값) === true
//     if (!isNaN(x)) answer += x;
//   }
//   return parseInt(answer);
// }
