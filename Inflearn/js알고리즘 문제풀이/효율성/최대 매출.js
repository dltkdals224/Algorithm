// 2022.09.02
function solution(k, arr) {
  let ansArr = [];

  arr.map((v, i) => {
    if (arr[i + 1] !== undefined && arr[i + 2] !== undefined)
      ansArr.push(v + arr[i + 1] + arr[i + 2]);
  });

  return Math.max(...ansArr);
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
