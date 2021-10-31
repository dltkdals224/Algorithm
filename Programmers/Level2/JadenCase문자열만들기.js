//2021.11.01
function solution(s) {
  let ans = s;
  let tmp = "";

  ans = ans.split(" ");

  for (let n = 0; n < ans.length; n++) {
    if (isNaN(ans[n][0])) {
      tmp = ans[n].split("");
      tmp.splice(0, 1, String.fromCharCode(ans[n][0].charCodeAt(0) - 32));
      tmp = tmp.join("");
    } else {
      tmp = ans[n];
    }
    ans[n] = tmp;
  }

  ans = ans.join(" ");
  return ans;
}

//대문자를 소문자화 하는 과정 필요
