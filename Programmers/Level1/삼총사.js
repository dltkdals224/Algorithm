function solution(number) {
  let answer = 0;

  const COMBINATION_LIST = getCombinations(number, 3);
  COMBINATION_LIST.forEach((arr) => {
    const ARR_SUM = arr.reduce((sum, cur) => {
      return sum + cur;
    });

    if (ARR_SUM === 0) {
      answer++;
    }
  });

  return answer;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두 다 push
  });

  return results; // 결과가 담긴 results를 return
};

solution([-2, 3, 0, 2, -5]); // 2
solution([-3, -2, -1, 0, 1, 2, 3]); // 5
