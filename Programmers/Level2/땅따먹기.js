//2021.11.13
//전부 실패
function solution(land) {
  let ans = 0;
  let tmp1 = 0;
  let tmp2 = 0;

  const arr = JSON.parse(JSON.stringify(land));

  let continuity = [];

  for (let n = 0; n < land.length; n++) {
    continuity.push(land[n].indexOf(Math.max(...land[n])));
  }

  for (let m = 0; m < continuity.length; m++) {
    if (continuity[m] === continuity[m + 1]) {
      tmp1 = land[continuity.indexOf(continuity[m])][continuity[m]];
      land[continuity.indexOf(continuity[m])][continuity[m]] = 0;

      tmp2 =
        land[
          continuity.indexOf(
            continuity[m],
            continuity.indexOf(continuity[m]) + 1
          )
        ][continuity[m + 1]];
      land[
        continuity.indexOf(continuity[m], continuity.indexOf(continuity[m]) + 1)
      ][continuity[m + 1]] = 0;

      //
      if (tmp1 + Math.max(...land[m + 1]) < tmp2 + Math.max(...land[m])) {
        continuity[m] = land[m].indexOf(Math.max(...land[m]));
      } else {
        continuity[m + 1] = land[m + 1].indexOf(Math.max(...land[m + 1]));
      }
    }
  }

  for (let n = 0; n < continuity.length; n++) {
    ans += arr[n][continuity[n]];
  }

  return ans;
}
