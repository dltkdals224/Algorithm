function solution(orders) {
  const STUDENTS_NUMBER = orders.length;
  let studentsNumber = orders.length;

  let answer = [];
  let tmp = Array(STUDENTS_NUMBER).fill(0);
  let tt = [];

  for (let t = 0; t < studentsNumber; t++) {
    for (let i = 0; i < studentsNumber; i++) {
      tmp[orders[i][0]]++;
    }

    // 선출 확인
    const tmptmp = [...tmp];
    tmptmp.sort((a, b) => {
      return b - a;
    });
    const reverseTmp = tmp.reverse();
    const ind = reverseTmp.indexOf(tmptmp[t]);

    tmp.reverse();

    if (tmptmp[t] >= Math.ceil(STUDENTS_NUMBER / 2)) {
      answer = [t + 1, tmp.length - (ind + 1)];
      break;
    }

    // 최소표 찾기
    let leastVoted = tmp.indexOf(Math.min(...tmp));

    // 선출 안됐으면 최소표가 타겟에서 탈락(동수타시 앞번호 탈락)
    for (let i = 0; i < studentsNumber; i++) {
      orders[i] = orders[i].filter((element) => element !== leastVoted);
    }

    // tmp 초기화
    tmp = Array(STUDENTS_NUMBER).fill(0);
    tt.push(leastVoted);
    for (let i = 0; i < tt.length; i++) {
      tmp[tt[i]] = 99;
    }
  }

  return answer;
}

solution([
  [2, 3, 4, 0, 1],
  [1, 4, 3, 2, 0],
  [4, 1, 0, 2, 3],
  [3, 2, 1, 4, 0],
  [0, 3, 2, 1, 4],
]); // [4,3]

solution([
  [2, 1, 0, 3],
  [3, 2, 0, 1],
  [3, 0, 2, 1],
  [2, 3, 0, 1],
]); // [1,3]
