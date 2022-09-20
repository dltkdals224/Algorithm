const solution = (arr) => {
  let ans = [];

  for (let i = 1; i <= arr.length; i++) {
    ans.push(getPermutations([0, 1, 7], i));
  }

  console.log(ans.flat(1));
};

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

solution([1, 2, 3, 4]);
