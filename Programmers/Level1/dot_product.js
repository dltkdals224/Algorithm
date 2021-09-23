//2021.09.23
function solution(a, b) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) ans += a[i] * b[i];
  return ans;
}

//reduce 이용
/*
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
*/
