// 2022.09.20
// permutation을 구성하는 부분이 난이도가 높음.
function solution(numbers) {
  let answer = 0;
  let cardArray = numbers.split("");
  let permutation = [];

  // 조합 생성
  for (let i = 1; i < numbers.length + 1; i++) {
    permutation.push(getPermutations(cardArray, i));
  }

  // 배열을 숫자로, 중복 제거
  permutation = cutBack(permutation.flat(1));

  // 소수 판별
  for (let i = 0; i < permutation.length; i++) {
    if (isDecimal(permutation[i])) {
      answer++;
    }
  }

  return answer;
}

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const cutBack = (arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(Number(arr[i].join("")));
  }

  results = results.filter((element, index) => {
    return results.indexOf(element) === index;
  });

  return results;
};

const isDecimal = (number) => {
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
