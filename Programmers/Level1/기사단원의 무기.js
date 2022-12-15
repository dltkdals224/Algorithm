// 2022.12.15
function solution(number, limit, power) {
  let ans = 0;

  const INDEX_ARRAY = Array.from({ length: number }, (_, i) => i + 1);
  const CHANGED_ARRAY = [];

  INDEX_ARRAY.forEach((v) => {
    if (countDecimalNum(v) <= limit) {
      CHANGED_ARRAY.push(countDecimalNum(v));
    } else {
      CHANGED_ARRAY.push(power);
    }
  });

  CHANGED_ARRAY.forEach((v) => {
    ans += v;
  });

  return ans;
}

const countDecimalNum = (num) => {
  const SQRT_VALUE = Math.sqrt(num);
  let RETURN_COUNT = SQRT_VALUE % 1 === 0 ? 1 : 0;

  for (let i = 1; i < SQRT_VALUE; i++) {
    if (num % i === 0) {
      RETURN_COUNT += 2;
    }
  }

  return RETURN_COUNT;
};

// solution(5, 3, 2); // 10
// solution(10, 3, 2); // 21
