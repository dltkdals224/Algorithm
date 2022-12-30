// 2022.12.30
function solution(n, k) {
  let ans = 0;

  const TARGET_STRING_ARRAY = String(n.toString(k)).split("0");
  const TARGET_NUMBER_ARRAY = [];

  TARGET_STRING_ARRAY.forEach((target) => {
    if (Number(target) !== 0) {
      TARGET_NUMBER_ARRAY.push(Number(target));
    }
  });

  TARGET_NUMBER_ARRAY.forEach((num) => {
    if (checkDecimal(num)) {
      ans++;
    }
  });

  return ans;
}

// 소수판별
const checkDecimal = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

solution(437674, 3); // 3
solution(110011, 10); // 2
solution(11, 10); // 1
