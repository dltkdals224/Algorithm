//2021.10.11
//미완
function solution(weights, head2head) {
  //변수 및 객체
  let ans = [];
  let boxer = [];

  let matchNum = head2head.length;
  let h2hTmp = [];
  for (let n = 0; n < matchNum; n++) {
    h2hTmp[n] = 0;
  }
  let winHeavyTmp = [];
  for (let n = 0; n < matchNum; n++) {
    winHeavyTmp[n] = 0;
  }

  function Obj(number, winRate, winHeavy, weight) {
    this.number = number;
    this.winRate = winRate;
    this.winHeavy = winHeavy;
    this.weight = weight;
  }

  //사전작업
  for (let n = 0; n < matchNum; n++) {
    let nRecord = [];
    nRecord = head2head[n].split("");
    for (let k = 0; k < matchNum; k++) {
      if (nRecord[k] === "W") {
        h2hTmp[n]++;
        if (weights[n] < weights[k]) winHeavyTmp[n]++;
      } else continue;
    }
  }

  //객체 할당
  for (let n = 0; n < matchNum; n++) {
    boxer[n] = new Obj(n + 1, h2hTmp[n] / matchNum, winHeavyTmp[n], weights[n]);
  }

  //순서 부여
  function cmpBoxer(a, b) {
    return -1;
  }
  //한번에 네가지 정렬 우선순위를 모두 적용할 수 있는 방법이 있을까?
  boxer.sort(cmpBoxer);

  return ans;
}

solution([50, 82, 75, 120], ["NLWL", "WNLL", "LWNW", "WWLN"]);
