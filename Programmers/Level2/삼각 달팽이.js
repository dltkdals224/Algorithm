// 2023.02.09
function solution(n) {
  let num = 1;
  const arr = Array.from({ length: n }, (_, idx) => Array(idx + 1).fill(0));

  const handleTriangle = (value) => {
    const type = value % 3;
    const nth = Math.floor((n - value) / 3);

    // 좌변
    if (type === n % 3) {
      arr.forEach((innerArr) => {
        if (innerArr.length - 1 >= 2 * nth && innerArr.length <= n - nth) {
          innerArr[nth] = num;
          num++;
        }
      });
    }
    // 하단
    if (type === (n % 3) - 1 || type === (n % 3) + 2) {
      for (i = nth + 1; i <= arr[n - 1 - nth].length - (nth + 1); i++) {
        arr[n - 1 - nth][i] = num;
        num++;
      }
    }
    // 우변
    if (type === (n % 3) - 2 || type === (n % 3) + 1) {
      arr.reverse();
      arr.forEach((innerArr) => {
        if (
          innerArr.length <= n - (nth + 1) &&
          innerArr.length >= (nth + 1) * 2
        ) {
          innerArr[innerArr.length - (nth + 1)] = num;
          num++;
        }
      });
      arr.reverse();
    }
  };

  for (let i = n; i > 0; i--) {
    handleTriangle(i);
  }

  return arr.flat();
}

solution(4); // [1,2,9,3,10,8,4,5,6,7]
solution(5); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
solution(6); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
// solution(8);
