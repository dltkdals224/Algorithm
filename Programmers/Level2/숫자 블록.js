// 2022.10.15
function solution(begin, end) {
  let answer = [];

  for (let i = begin; i <= end; i++) {
    answer.push(findDecimal(i));
  }

  return answer;
}

const findDecimal = (num) => {
  if (num === 1) {
    return 0;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0 && num / i < 10000000) {
      return num / i;
    }
  }

  return 1;
};

// solution(1, 10); //[0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
// solution(5, 15); //[1, 3, 1, 4, 3, 5, 1, 6, 1, 7, 5]
// solution(20000010, 20000020);
