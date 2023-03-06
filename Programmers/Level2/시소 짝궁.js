// 특정 테스트에서 factorial로 인한 시간 초과
function solution(weights) {
  var answer = 0;
  const map = new Map();

  weights.forEach((target) => {
    map.set(target, (map.get(target) || 0) + 1);
  });

  //
  Array.from(map).forEach((arr) => {
    if (arr[1] !== 1) {
      answer += factorial(arr[1]) / (factorial(2) * factorial(arr[1] - 2));
    }
  });

  //
  weights.sort((a, b) => a - b);
  weights.forEach((target) => {
    if (map.get((target * 3) / 2)) {
      answer += map.get((target * 3) / 2);
    }
    if (map.get((target * 4) / 3)) {
      answer += map.get((target * 4) / 3);
    }
    if (map.get((target * 4) / 2)) {
      answer += map.get((target * 4) / 2);
    }
  });

  console.log(answer);
  return answer;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

solution([100, 180, 360, 100, 270]); // 4
