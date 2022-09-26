// 2022.09.26
function solution(n, a, b) {
  const midValue = n / 2;

  const changedA = a > midValue ? a - midValue : a;
  const changedB = b > midValue ? b - midValue : b;

  if ((a <= midValue && b > midValue) || (b <= midValue && a > midValue)) {
    return Math.log2(n);
  } else {
    return solution(midValue, changedA, changedB);
  }
}
