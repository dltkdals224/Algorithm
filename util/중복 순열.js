const solution = (arr) => {
  let pwrArr = [];
  let pwrStringArr = [];
  let pwrSortedArr = [];

  for (let i = 1; i <= arr.length; i++) {
    pwr([], i, arr, pwrArr);
  }

  pwrArr.map((v) => {
    pwrStringArr.push(v.join(""));
  });

  pwrSortedArr = [...pwrStringArr].sort();

  console.log(pwrSortedArr);
};

const pwr = (items, k, list, result) => {
  if (items.length === k) {
    result.push(items);
    return;
  }

  for (let i = 0; i < list.length; i++) {
    pwr([...items, list[i]], k, list, result);
  }
};

solution(["a", "b", "c"]);
