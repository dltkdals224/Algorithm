function solution(today, terms, privacies) {
  let answer = [];

  const todayTime = 시간환산(today);

  let tmp = [];

  const ddObj = {};
  for (let i = 0; i < terms.length; i++) {
    ddObj[terms[i].split(" ")[0]] = Number(terms[i].split(" ")[1]);
  }

  for (let i = 0; i < privacies.length; i++) {
    tmp.push(
      시간환산(privacies[i].split(" ")[0]) +
        ddObj[privacies[i].split(" ")[1]] * 28
    );
  }

  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] <= todayTime) {
      answer.push(i + 1);
    }
  }

  return answer;
}

const 시간환산 = (string) => {
  const splitString = string.split(".");
  const time =
    Number(splitString[0]) * 12 * 28 +
    Number(splitString[1]) * 28 +
    Number(splitString[2]);

  return time;
};
