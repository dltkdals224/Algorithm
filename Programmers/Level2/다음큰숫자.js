//2021.11.14
//저번주에는 효율성을 통과 못했는데,, 오늘은 통과된다라,,
function solution(n) {
  let ans = 0;
  let arr = [];
  let numberOfOne = 0;

  let arr2 = [];
  let numberOfOne2 = 0;

  arr = n.toString(2).split("");
  numberOfOne = arr.filter((elem) => elem == 1).length;

  while (1) {
    arr2 = (++n).toString(2).split("");
    numberOfOne2 = arr2.filter((elem) => elem == 1).length;

    if (numberOfOne2 === numberOfOne) {
      ans = n;
      break;
    }
  }

  console.log(ans);
  return ans;
}
