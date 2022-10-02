function solution(cap, n, deliveries, pickups) {
  let ans = 0;

  while (1) {
    // 이동
    ans += Math.max(findMaxDistance(deliveries), findMaxDistance(pickups));

    // 처리 후 del pic 값
    deliveries = clear(deliveries, cap);
    pickups = clear(pickups, cap);

    // 탈출문
    if (Math.max(...deliveries) === 0 && Math.max(...pickups) === 0) {
      break;
    }
  }

  return ans * 2;
}

const findMaxDistance = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[arr.length - i] === 0) {
      continue;
    } else {
      return arr.length - (i - 1);
    }
  }
};

const clear = (arr, n) => {
  let tmp = 0;

  for (let i = 1; i < arr.length + 1; ) {
    if (arr[arr.length - i] !== 0) {
      arr[arr.length - i]--;
      tmp++;
    }
    if (arr[arr.length - i] === 0) {
      i++;
    }

    if (tmp === n) {
      break;
    }
  }

  return arr;
};

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]); // 16
solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]); // 30
