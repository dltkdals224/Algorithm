//2021.11.01
function solution(s) {
  let ans = "";
  ans = s;

  //시작할 때, 대문자를 전부 소문자화.
  ans = ans.split("");
  for (let m = 0; m < ans.length; m++) {
    if (ans[m].charCodeAt(0) >= 65 && ans[m].charCodeAt(0) <= 90)
      ans.splice(m, 1, String.fromCharCode(ans[m].charCodeAt(0) + 32));
    else continue;
  }
  //각 단어의 첫 문자 대문자화.
  for (let n = 0; n < ans.length; n++) {
    if (
      (ans[n - 1] == " " || ans[n - 1] == undefined) &&
      ans[n].charCodeAt(0) >= 97 &&
      ans[n].charCodeAt(0) <= 122
    ) {
      ans.splice(n, 1, String.fromCharCode(ans[n].charCodeAt(0) - 32));
    }
  }

  ans = ans.join("");
  return ans;
}

//다른풀이
/* function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
*/
//map함수 깔끔하다.
//charAt과 인덱스 접근법의 차이
