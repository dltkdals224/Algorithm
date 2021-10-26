//2021.10.27
function solution(n) {
  let ans = -1;
  let divider = 2;

  for (; divider <= n; divider++)
    if (n % divider == 1) {
      ans = divider;
      break;
    }

  return ans;
}
