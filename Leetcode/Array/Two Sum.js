/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const ARR_LENGTH = nums.length;
  for (let i = 0; i < ARR_LENGTH - 1; i++) {
    for (let j = i + 1; j < ARR_LENGTH; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// twoSum([2, 7, 11, 15], 9); // [0,1]
// twoSum([3, 2, 3], 6); // [0,2]

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let mp = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i]

//         if (mp.has(diff)) {
//             return [i, mp.get(diff)]
//         }

//         mp.set(nums[i], i)
//     }
// };
