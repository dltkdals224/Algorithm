//2021.11.11
function solution(A, B) {
  let ans = 0;
  let arrLength = A.length;

  A.sort((a, b) => {
    return a - b;
  });
  B.sort((a, b) => {
    return a - b;
  });

  for (let n = 0; n < arrLength; n++) {
    ans += A[n] * B[arrLength - 1 - n];
  }
  return ans;
}
