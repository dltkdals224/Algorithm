const solution = (arr) => {
  let pwcArr = [];
  let pwcStringArr = [];
  let pwcSortedArr = [];

  for (let i = 1; i <= arr.length; i++) {
    pwc([], 0, i, arr, pwcArr);
  }

  pwcArr.map((v) => {
    pwcStringArr.push(v.join(""));
  });

  pwcSortedArr = [...pwcStringArr].sort();

  console.log(pwcSortedArr);
};

const pwc = (items, idx, k, list, result) => {
  if (items.length === k) {
    result.push(items);
    return;
  }

  for (let i = idx; i < list.length; i++) {
    pwc([...items, list[i]], i, k, list, result);
  }
};

solution(["a", "b", "c"]);
