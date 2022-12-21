function solution(X, Y) {
  let answer = "";

  const NUMBER = {};
  const INTERSECTION = [];

  X.split("").forEach((num) => {
    NUMBER[num] = (NUMBER[num] || 0) + 1;
  });
  Y.split("").forEach((num) => {
    if (NUMBER[num]) {
      INTERSECTION.push(num);
      NUMBER[num]--;
    }
  });

  answer =
    INTERSECTION.length > 0
      ? INTERSECTION.sort((a, b) => b - a).join("")
      : "-1";

  if (answer.match(/[^0]/g) === null) answer = "0";

  return answer;
}

solution("100", "2345"); // -1
solution("100", "203045"); // 0
solution("100", "123450"); // 10
solution("12321", "42531"); // 321
solution("5525", "1255"); // 552
solution("122225", "55555111112"); // 521
