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
