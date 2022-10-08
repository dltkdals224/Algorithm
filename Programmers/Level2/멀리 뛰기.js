function solution(n) {
  let ans = 0;

  (dfsRecursion = (cumulativeSum, plus) => {
    cumulativeSum += plus;
    if (cumulativeSum > n) {
      return;
    }
    if (cumulativeSum === n) {
      ans++;
      return;
    }

    dfsRecursion(cumulativeSum, 1);
    dfsRecursion(cumulativeSum, 2);
  })(0, 0);

  return ans;
}

solution(5); // 8
solution(4); // 5
solution(3); // 3
