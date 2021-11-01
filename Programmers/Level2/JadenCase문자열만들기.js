//2021.11.01
function solution(s) {
  let ans = s;
  let tmp = "";

  //시작할 때, 대문자를 전부 소문자화.
  ans = ans.split("");
  for (let m = 0; m < ans.length; m++) {
    if (ans[m].charCodeAt(0) >= 65 && ans[m].charCodeAt(0) <= 90)
      ans.splice(m, 1, String.fromCharCode(ans[m].charCodeAt(0) + 32));
    else continue;
  }
  ans = ans.join("");

  //맨 앞글자 대문자화.
  ans = ans.split(" ");
  for (let n = 0; n < ans.length; n++) {
    if (ans[n][0].charCodeAt(0) >= 97 && ans[n][0].charCodeAt(0) <= 122) {
      tmp = ans[n].split("");
      tmp.splice(0, 1, String.fromCharCode(ans[n][0].charCodeAt(0) - 32));
      tmp = tmp.join("");
    } else {
      tmp = ans[n];
    }
    ans[n] = tmp;
  }

  ans = ans.join(" ");
  console.log(ans);
  return ans;
}

solution("3people unFollowed me");

//run time error발생
