function solution(order) {
  let answer = 0;

  const DEFAULT_ORDER = Array.from(
    { length: order.length },
    (_, idx) => idx + 1
  ).reverse();
  const ADDITIONAL_ORDER = [];

  while (answer < order.length) {
    if (DEFAULT_ORDER[DEFAULT_ORDER.length - 1] === order[answer]) {
      DEFAULT_ORDER.pop();
      answer++;
      continue;
    }
    if (ADDITIONAL_ORDER[ADDITIONAL_ORDER.length - 1] === order[answer]) {
      ADDITIONAL_ORDER.pop();
      answer++;
      continue;
    }
    if (DEFAULT_ORDER.length === 0) {
      break;
    }

    const STACK = DEFAULT_ORDER.pop();
    ADDITIONAL_ORDER.push(STACK);
  }

  return answer;
}

solution([4, 3, 1, 2, 5]); // 2
solution([5, 4, 3, 2, 1]); // 5
