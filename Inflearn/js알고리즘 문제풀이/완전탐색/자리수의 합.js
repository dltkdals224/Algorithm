// 2022.08.24
function solution(n, arr) {
  let sumOfEachDigitList = [];

  // 시간복잡도 O(n^2)
  arr.map((v) => {
    let eachSum = 0;
    String(v)
      .split("")
      .forEach((v2) => {
        eachSum += Number(v2);
      });
    sumOfEachDigitList.push(eachSum);
  });

  let maxValueIndexList = [];
  const maxValue = Math.max(...sumOfEachDigitList);
  // 최대값의 index조사
  let idx = 0;
  while (idx !== -1) {
    sumOfEachDigitList.indexOf(maxValue, idx) !== -1 &&
      maxValueIndexList.push(sumOfEachDigitList.indexOf(maxValue, idx));
    idx = sumOfEachDigitList.indexOf(maxValue, idx + 1);
  }

  let maxValueTargetList = [];
  maxValueIndexList.map((v) => {
    maxValueTargetList.push(arr[v]);
  });

  return arr.indexOf(Math.max(...maxValueTargetList));
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
console.log(solution(4, [28, 11, 22, 37]));

// 풀이
// 마찬가지로 시간 복잡도 O(n^2)

// function solution(n, arr){
//   let answer, max=Number.MIN_SAFE_INTEGER;
//   for(let x of arr){
//       let sum=0, tmp=x;
//       while(tmp){
//           sum+=(tmp%10);
//           tmp=Math.floor(tmp/10);
//       }
//       if(sum>max){
//           max=sum;
//           answer=x;
//       }
//       else if(sum===max){
//           if(x>answer) answer=x;
//       }
//   }
//   return answer;
// }
