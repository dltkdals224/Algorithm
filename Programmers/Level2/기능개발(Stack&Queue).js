// 2022.09.20
function solution(progresses, speeds) {
  let answer = [];

  let dayRequired = [];
  progresses.map((progress, index) => {
    dayRequired.push(Math.ceil((100 - progress) / speeds[index]));
  });

  let stack = [];
  let publishTarget = -1;

  for (let i = 0; i < dayRequired.length; i++) {
    if (dayRequired[i + 1] === undefined) {
      answer.push(stack.length + 1);
    }

    if (stack.length === 0) {
      publishTarget = dayRequired[i];
    }

    if (dayRequired[i + 1] > publishTarget) {
      // 따로 배포
      answer.push(stack.length + 1);
      publishTarget = -1;
      stack = [];
    } else {
      // 같이 배포
      stack.push(dayRequired[i]);
    }
  }

  return answer;
}

solution([93, 30, 55], [1, 130, 5]);
solution([95, 90, 99, 95, 80, 99], [1, 1, 1, 1, 1, 1]);

// 다른 사람의 풀이
// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//   let maxDay = days[0];

//   for(let i = 0, j = 0; i< days.length; i++){
//       if(days[i] <= maxDay) {
//           answer[j] += 1;
//       } else {
//           maxDay = days[i];
//           answer[++j] = 1;
//       }
//   }

//   return answer;
// }
