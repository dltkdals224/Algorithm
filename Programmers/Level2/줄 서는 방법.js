// 2022.10.10
function solution(n, k) {
  let ans = [];
  let targetIndex = [];

  const numberArr = Array.from({ length: n }, (_, i) => i + 1);

  let target = k - 1;
  for (let i = n - 1; i > 0; i--) {
    const quotient = Math.floor(target / factorial(i));

    targetIndex.push(quotient);
    target = (k - 1) % factorial(i);
  }

  for (let i = 0; i < targetIndex.length; i++) {
    ans.push(numberArr.splice(targetIndex[i], 1)[0]);
  }
  ans.push(numberArr[0]);

  return ans;
}

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

// 직접 배열을 만들고 순서를 찾아가는 건 런타임 에러 발생.

// function solution(n, k) {
//   const numberArr = Array.from({ length: n }, (_, i) => i + 1);

//   const sortedList = getPermutations(numberArr, n);
//   return sortedList[k - 1];
// }

// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value) => [value]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((permutation) => [fixed, ...permutation]);
//     results.push(...attached);
//   });

//   return results;
// };

// solution(3, 4); // [2,3,1]
// solution(3, 5); // [3,1,2]

// solution(4, 7); // [2,1,3,4]
