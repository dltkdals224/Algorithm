/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const maxScore = function (nums1, nums2, k) {
  // getCombination를 직접 사용하는 구조에서 Runtime Error 발생

  let ans = 0;

  const combinationArray1 = getCombinations(nums1, k);
  const combinationArray2 = getCombinations(nums2, k);

  combinationArray1.forEach((arr, idx) => {
    const sum = arr.reduce((sum, currValue) => {
      return sum + currValue;
    }, 0);
    const min = Math.min(...combinationArray2[idx]);
    if (sum * min > ans) {
      ans = sum * min;
    }
  });

  return ans;
};

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3); // 12
maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1); // 30
