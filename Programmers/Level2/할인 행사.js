// 2022.01.04
function solution(want, number, discount) {
  let answer = 0;

  const TOTAL_COUNT_OF_WANT = number.reduce((sum, cur) => {
    return sum + cur;
  }, 0);

  for (let i = 0; i <= discount.length - TOTAL_COUNT_OF_WANT; i++) {
    const REMAINING_LIST = new Map();
    want.forEach((item, idx) => {
      REMAINING_LIST.set(item, number[idx]);
    });

    discount.slice(i, i + 10).forEach((discountItem) => {
      REMAINING_LIST.set(
        discountItem,
        (REMAINING_LIST.get(discountItem) || 1) - 1
      );
    });

    let sum = 0;
    for (let i of REMAINING_LIST) {
      sum += i[1];
    }

    if (sum === 0) {
      answer++;
    }
  }

  return answer;
}

// solution(
//   ["banana", "apple", "rice", "pork", "pot"],
//   [3, 2, 2, 2, 1],
//   [
//     "chicken",
//     "apple",
//     "apple",
//     "banana",
//     "rice",
//     "apple",
//     "pork",
//     "banana",
//     "pork",
//     "rice",
//     "pot",
//     "banana",
//     "apple",
//     "banana",
//   ]
// ); // 3
