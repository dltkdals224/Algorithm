//2021.09.23
function solution(absolutes, signs) {
  let ans = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == 1) ans += absolutes[i];
    else ans -= absolutes[i];
  }
  return ans;
}

//reduce 풀이
/*
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
*/
