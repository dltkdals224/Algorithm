//2021.11.13
function solution(n) {
  //기본적으로 하나 존재
  let ans = 1;
  let tmp = 1 + 2;

  if (n % 2 === 1) ans++;

  for (let i = 3; ; i++) {
    tmp += i;
    if (n - tmp < 0) {
      break;
    } else {
      if ((n - tmp) % i === 0) ans++;
      continue;
    }
  }

  return ans;
}
//순수 아이디어 싸움
