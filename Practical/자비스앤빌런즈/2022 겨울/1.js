function solution(students) {
  let ans = [];
  let scoreArray = [];

  students.map((status) => {
    let ScoreByAttendance = 0;
    let ScoreForPassOrFail = 0;

    for (let i = 0; i < status.length; i++) {
      if (status[i] === "A") {
        ScoreByAttendance += 1;
      }
      if (status[i] === "L") {
        ScoreByAttendance -= 0.5;
        ScoreForPassOrFail += 1;
      }
      if (status[i] === "P") {
        ScoreByAttendance -= 1;
        ScoreForPassOrFail += 2;
      }
    }

    if (ScoreForPassOrFail < 6) {
      scoreArray.push(10 + Math.ceil(ScoreByAttendance));
    } else {
      scoreArray.push(0);
    }
  });

  for (let j = 0; j < scoreArray.length; j++) {
    const IndexofMaxValue = scoreArray.reduce(
      (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
      0
    );
    ans.push(IndexofMaxValue + 1);
    scoreArray[IndexofMaxValue] = -1;
  }

  return ans;
}

solution(["AAALLLAPAA", "AAAAAAAPPP", "ALAAAAPAAA"]);
solution(["ALALLAAPAA", "ALLLAAAPAA", "APAPALLAAA"]);
