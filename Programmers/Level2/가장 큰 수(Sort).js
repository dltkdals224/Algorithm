// 2022.09.20
function solution(numbers) {
  const sortedArr = numbers.sort((a, b) => {
    return (
      Number(b.toString() + a.toString()) - Number(a.toString() + b.toString())
    );
  });

  return sortedArr.join("")[0] === "0" ? "0" : sortedArr.join("");
}
