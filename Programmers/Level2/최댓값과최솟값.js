//2021.11.13
function solution(s) {
  let arr = s.split(" ");
  for (let n = 0; n < arr.length; n++) {
    arr[n] = parseInt(arr[n], 10);
  }

  return String(Math.min(...arr) + " " + Math.max(...arr));
}
// 군더더기 없음
