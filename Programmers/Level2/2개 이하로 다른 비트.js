// 2023.01.08
function solution(numbers) {
  let answer = [];

  numbers.forEach((num) => {
    const BINARY_LENGTH = num.toString(2).length;
    if (
      num.toString(2).lastIndexOf("0") === BINARY_LENGTH - 1 ||
      num.toString(2).lastIndexOf("0") === BINARY_LENGTH - 2
    ) {
      answer.push(num + 1);
    } else {
      const SPLIT_TO_CHECK = num.toString(2).split("0");
      const CONSECUTIVE_LENGTH =
        SPLIT_TO_CHECK[SPLIT_TO_CHECK.length - 1].length;

      answer.push(num + 2 ** (CONSECUTIVE_LENGTH - 1));
    }
  });

  return answer;
}

// solution([2, 7, 8, 11]); // [3, 11, 9, 13]
