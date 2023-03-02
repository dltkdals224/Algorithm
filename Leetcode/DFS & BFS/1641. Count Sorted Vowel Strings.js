// 2023.03.02
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  if (n === 1) return 5;

  const TARGET_ARRAY = Array.from({ length: 5 }, (_, i) => Math.abs(5 - i));
  let ansArray = TARGET_ARRAY;
  const ans = (function dfs(array, depth) {
    if (depth === n) {
      return ansArray;
    }

    ansArray = [];
    for (let i = 0; i < 5; i++) {
      ansArray.push(array.reduce((a, b) => a + b));
      array.shift();
    }
    return dfs(ansArray, depth + 1);
  })(TARGET_ARRAY, 2);

  return ans.reduce((a, b) => a + b);
};

// countVowelStrings(2);
// countVowelStrings(3);
// countVowelStrings(33);
