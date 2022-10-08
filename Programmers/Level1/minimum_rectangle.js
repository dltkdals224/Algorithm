//2021.10.11
//2021.10.28 retry
function solution(sizes) {
  let ans = 0;
  let tmp = 0;

  for (let n = 0; n < sizes.length; n++) {
    if (sizes[n][0] < sizes[n][1]) {
      tmp = sizes[n][0];
      sizes[n][0] = sizes[n][1];
      sizes[n][1] = tmp;
    }
  }

  let longSideTmp = [];
  let shortSideTmp = [];
  for (let n = 0; n < sizes.length; n++) {
    longSideTmp.push(sizes[n][0]);
    shortSideTmp.push(sizes[n][1]);
  }
  ans = Math.max(...longSideTmp) * Math.max(...shortSideTmp);

  return ans;
}
