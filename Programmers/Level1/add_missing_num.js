//2021.09.26
function solution(numbers) {
  return (
    45 -
    numbers.reduce((sum, cur) => {
      return sum + cur;
    })
  );
}
