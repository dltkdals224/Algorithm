// 2022.09.20
function solution(numbers) {
  const sortedArr = numbers.sort((a, b) => {
    return (
      Number(b.toString() + a.toString()) - Number(a.toString() + b.toString())
    );
  });

  return sortedArr.join("")[0] === "0" ? "0" : sortedArr.join("");
}

// 후기
// 다시봐도 혁신적. sort() 내장함수에 대한 완벽한 이해.
