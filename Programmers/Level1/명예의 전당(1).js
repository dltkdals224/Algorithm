// 2022.12.12
function solution(k, score) {
  let answer = [];
  let fameList = [];

  score.forEach((value, idx) => {
    fameList.push(value);

    if (fameList.length === k + 1) {
      fameList.sort((a, b) => {
        return b - a;
      });
      fameList.pop();
    }

    fameList.sort((a, b) => {
      return b - a;
    });

    answer.push(fameList[fameList.length - 1]);
  });

  return answer;
}

// solution(3, [10, 100, 20, 150, 1, 100, 200]); // [10, 10, 10, 20, 20, 100, 100]
// solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
