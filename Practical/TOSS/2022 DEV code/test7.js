function solution(ids, days) {
  let answer = [];

  const LENGTH = ids.length;
  const obj = {};

  // 핵심
  // 배열에 존재하는 인자 수 만큼의 key로 객체 생성 및 값 할당
  for (let i = 0; i < LENGTH; i++) {
    obj[ids[i]] = [];
  }
  for (let i = 0; i < LENGTH; i++) {
    obj[ids[i]].push(days[i]);
  }

  const OBJ_LENGTH = Object.keys(obj).length;

  // 핵심
  // 배열 내 중복되는 인자 제거
  for (let i = 0; i < OBJ_LENGTH; i++) {
    obj[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]].filter(
      (element, index) => {
        return obj[Object.keys(obj)[i]].indexOf(element) === index;
      }
    );
  }

  for (let i = 0; i < OBJ_LENGTH; i++) {
    if (obj[Object.keys(obj)[i]].length >= 3) {
      answer.push(Number(Object.keys(obj)[i]));
    }
  }

  return answer;
}

solution(
  // ids
  [1, 2, 1, 3, 1, 2, 1],
  // days
  ["월", "목", "월", "수", "일", "화", "금"]
);
// 결과 : [1]

solution(
  // ids
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  // days
  ["월", "목", "월", "월", "목", "월", "월", "목", "월"]
);
// 결과 : 당첨자 없음

solution(
  // ids
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  // days
  ["월", "화", "수", "월", "화", "수", "월", "화", "수"]
);
// 결과 : [1, 2, 3]
