// 2023.01.03
function solution(elements) {
  let answer = 0;
  const TMP = [];

  for (let i = 0; i < elements.length; i++) {
    elements.reduce((sum, currValue) => {
      TMP.push(sum + currValue);
      return sum + currValue;
    }, 0);

    const SHIFT_ELEM = elements.shift();
    elements.push(SHIFT_ELEM);
  }
  const UNIQUE_ARR = new Set(TMP);
  answer = [...UNIQUE_ARR].length;

  return answer;
}

// solution([7, 9, 1, 1, 4]); // 18
