function solution(a, b, n) {
  let answer = 0;

  const findCoke = (num) => {
    if (num < a) {
      return;
    }

    answer += Math.floor(num / a) * b;
    findCoke(Math.floor(num / a) * b + (num % a));
  };
  findCoke(n);

  return answer;
}

solution(2, 1, 20); // 19
solution(3, 1, 20); // 9
