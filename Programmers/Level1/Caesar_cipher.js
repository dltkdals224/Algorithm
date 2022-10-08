//2021.08.25
function solution(s, n) {
  let answer = "";
  let tmp = [];

  tmp = s.split("");

  for (let i = 0; i < s.length; i++) {
    //공백
    if (tmp[i] == " ") {
      tmp[i] = " ";
    } else {
      if (
        s.charCodeAt(i) >= 65 &&
        s.charCodeAt(i) <= 90 &&
        s.charCodeAt(i) + n > 90
      )
        tmp[i] = String.fromCharCode(s.charCodeAt(i) + n - 26);
      else if (
        s.charCodeAt(i) >= 97 &&
        s.charCodeAt(i) <= 122 &&
        s.charCodeAt(i) + n > 122
      )
        tmp[i] = String.fromCharCode(s.charCodeAt(i) + n - 26);
      else tmp[i] = String.fromCharCode(s.charCodeAt(i) + n);
    }
  }

  answer = tmp.join("");
  return answer;
}

solution("a b c z D Z", 3);

//New Information
//ASC code 변환
//.charCodeAt()
//.fromCharCode()

//ASC code를 사용하지 않는것중 제일 깔끔
/*
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
*/
