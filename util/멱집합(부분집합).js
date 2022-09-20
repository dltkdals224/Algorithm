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
