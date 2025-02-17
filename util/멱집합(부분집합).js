// 멱집합: 주어진 집합의 모든 부분 집합들로 구성된 집합.
const 멱집합 = (numbers) => {
  let resArr = [];

  const dfs = (start = 0, arr = []) => {
    resArr.push(arr);

    for (let i = start; i < numbers.length; i++) {
      dfs(i + 1, [...arr, numbers[i]]);
    }
  };
  dfs();

  console.log(resArr);
  return resArr;
};

멱집합("017");
