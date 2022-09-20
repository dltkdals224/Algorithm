const solution = (arr) => {
  let ans = [];

  for (let i = 1; i <= arr.length; i++) {
    ans.push(getCombinations([0, 1, 7], i));
  }

  console.log(ans.flat(1));
};

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

solution([1, 2, 3, 4]);
