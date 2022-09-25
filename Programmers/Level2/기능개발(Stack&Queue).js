// 2022.09.20
function solution(progresses, speeds) {
  let answer = [];
  let dayRequired = [];
  progresses.map((progress, index) => {
    dayRequired.push(Math.ceil((100 - progress) / speeds[index]));
  });

  let stack = 1;
  let biggest = -1;

  for (let i = 0; i < dayRequired.length; i++) {
    // 마지막 처리
    if (dayRequired[i + 1] === undefined) {
      answer.push(stack);
    }

    // stack 증가
    if (dayRequired[i] >= dayRequired[i + 1]) {
      if (stack === 1) {
        biggest = dayRequired[i];
      }

      stack++;
      continue;
    }

    // biggest check
    if (dayRequired[i + 1] <= biggest) {
      stack++;
      continue;
    }

    // 배포 (stack 초기화 / biggest 초기화)
    if (dayRequired[i] < dayRequired[i + 1]) {
      answer.push(stack);
      stack = 1;
      biggest = -1;
    }
  }

  return answer;
}

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
