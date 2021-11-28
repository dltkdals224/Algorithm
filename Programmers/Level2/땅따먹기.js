//2021.11.13
//전부 실패
function solution(land) {
  let ans = 0;
  let len = land.length;
  let top = [];

  for (let n = 0; n < len; n++) {
    console.log(land[n]);

    if (
      land[n].indexOf(Math.max(...land[n])) ===
      land[n - 1].indexOf(Math.max(...land[n - 1]))
    ) {
      //이제 hardcore한 비교연산이 필요하다.
    } else {
      top.push(Math.max(...land[n]));
    }
  }
  console.log(top);

  console.log(ans);
  return ans;
}

solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]); // 16
solution([
  [1, 2, 3, 40],
  [90, 95, 85, 100],
  [1, 70, 60, 3],
  [20, 50, 30, 1],
  [1, 100, 2, 3],
]); // 4행까지는 40,90,60,50 // 5행 가면서 40,90,70,30,100
