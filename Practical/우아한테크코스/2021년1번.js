//2021.11
function solution(arr) {
  const arrNum = {
    1: 0,
    2: 0,
    3: 0,
  };

  for (let n = 0; n < arr.length; n++) {
    arr[n] === 1
      ? arrNum[`${1}`]++
      : arr[n] === 2
      ? arrNum[`${2}`]++
      : arrNum[`${3}`]++;
  }

  const maxNum = Math.max(...Object.values(arrNum));

  return Object.values(arrNum).map((el) => maxNum - +el);
}
