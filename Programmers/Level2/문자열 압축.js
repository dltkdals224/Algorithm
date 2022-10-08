function solution(s) {
  let answer = "";
  let stack = [];

  const LENGTH = Math.floor(s.length / 2);

  const arr = s.split("");

  for (let i = 1; i < LENGTH; i++) {
    for (let j = 1; ; j++) {
      s.slice(j, j + i) === s.slice(j + i, j + 2 * i);
      j = i;
    }
  }

  return answer;
}

solution("aabbaccc"); // 7
// solution("ababcdcdababcdcd"); // 9
