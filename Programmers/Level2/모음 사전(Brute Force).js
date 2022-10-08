// 2022.09.20
// 중복 순열을 통한 사전 구성 후 indexOf()로 찾는 구조
function solution(word) {
  const dictionaryWordsArr = ["A", "E", "I", "O", "U"];
  let pwrArr = [];
  let pwrStringArr = [];
  let pwrSortedArr = [];

  for (let i = 1; i <= dictionaryWordsArr.length; i++) {
    pwr([], i, dictionaryWordsArr, pwrArr);
  }
  pwrArr.map((v) => {
    pwrStringArr.push(v.join(""));
  });
  pwrSortedArr = [...pwrStringArr].sort();

  return pwrSortedArr.indexOf(word) + 1;
}

const pwr = (items, k, list, result) => {
  if (items.length === k) {
    result.push(items);
    return;
  }

  for (let i = 0; i < list.length; i++) {
    pwr([...items, list[i]], k, list, result);
  }
};

// 다른사람의 풀이
// function solution(words) {
//   return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
// }
