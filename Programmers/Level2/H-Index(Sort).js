// 2022.09.20
function solution(citations) {
  let answer = 0;

  for (let h = citations.length; h > 0; h--) {
    let validPaper = 0;

    for (let index = 0; index < citations.length; index++) {
      if (citations[index] >= h) {
        validPaper++;
      }
    }

    if (validPaper >= h) {
      answer = h;
      break;
    }
  }

  return answer;
}

// solution2의 속도가 O(n)으로 훨씬 빠르다.
const solution2 = (citations) => {
  citations.sort((a, b) => {
    return b - a;
  });

  if (citations[citations.length - 1] > citations.length) {
    return citations.length;
  }

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      continue;
    }

    return i;
  }
};

const getRandomNumber = () => {
  let arr = [];
  for (let i = 0; i < 900; i++) {
    arr.push(Math.floor(Math.random() * 10000));
  }
  return arr;
};
const testArr = getRandomNumber();

console.time("code_runtime_measure");
solution(testArr);
console.timeEnd("code_runtime_measure");

console.time("code_runtime_measure2");
solution2(testArr);
console.timeEnd("code_runtime_measure2");
