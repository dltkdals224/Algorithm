//2021.11.15
function solution(s) {
  let ans = true;
  let check = 0;

  for (let n = 0; n < s.length; n++) {
    s[n] === "(" ? check++ : check--;
    if (check < 0) {
      ans = false;
      break;
    }
  }
  if (check === 0) ans = true;
  else ans = false;

  return ans;
}
