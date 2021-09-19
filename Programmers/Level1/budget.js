//2021.09.20
function solution(d, budget) {
  let arr = [];
  let tmp = 0;
  let ans = 0;

  arr = d.sort((a, b) => {
    return a - b;
  });
  for (let t = 0; tmp <= budget; t++) {
    tmp += arr[t];
    ans = t;
  }
  return ans;
}

//New information
//동일한 값에 대해 sort는 명시적으로 함수리턴값을 적어줘야 제대로 동작한다.
//Line:8

//reduce()이용한 풀이법
/*
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}
*/
