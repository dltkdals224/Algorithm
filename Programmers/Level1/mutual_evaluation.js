//2021.10.10
function solution(scores) {
  let ans = "";
  let chk = [];
  let stuNum = scores.length;
  let scBoard = [];

  //최고,최저 제거
  for (let i = 0; i < stuNum; i++) {
    for (let j = 0; j < stuNum; j++) {
      scBoard.push(scores[j][i]);
    }
    //사전작업
    let tmp = [];
    let idx = scBoard.indexOf(scores[i][i]);
    while (idx != -1) {
      tmp.push(idx);
      idx = scBoard.indexOf(scores[i][i], idx + 1);
    }

    //본인점수가 최고/최저면 기록하기
    if (Math.max(...scBoard) == scores[i][i] && tmp.length == 1) {
      chk[i] = 1;
    } else if (Math.min(...scBoard) == scores[i][i] && tmp.length == 1) {
      chk[i] = 1;
    }
    scBoard = [];
  }

  //평균 계산
  for (let i = 0; i < stuNum; i++) {
    let tmp = 0;
    for (let j = 0; j < stuNum; j++) {
      tmp += scores[j][i];
    }
    if (chk[i] == 1) {
      scBoard[i] = (tmp - scores[i][i]) / (stuNum - 1);
    } else {
      scBoard[i] = tmp / stuNum;
    }
  }

  for (let n = 0; n < stuNum; n++) {
    scBoard[n] >= 90
      ? (ans += "A")
      : scBoard[n] >= 80
      ? (ans += "B")
      : scBoard[n] >= 70
      ? (ans += "C")
      : scBoard[n] >= 50
      ? (ans += "D")
      : (ans += "F");
  }
  return ans;
}

//New Information
// 배열에 대한 Math함수 mdn사용에 ...이 사용되어야 한다. //내부 인자 접근

//숏코딩
/*
let solution = scores =>
    (scores[0].map((_, c) => scores.map(r => r[c])))
        .map((s, i) => [...s.splice(i, 1), s])
        .map(([m, s]) => Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s)
        .map(s => "FDDCBAA"[Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)])
        .join("")
*/
