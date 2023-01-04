// 2023.01.04
function solution(record) {
  const answer = [];

  const RECORD_OBJ = {};
  record.forEach((string) => {
    const [TYPE, ID, NAME] = string.split(" ");
    if (RECORD_OBJ[ID]) {
      if (TYPE === "Enter" || TYPE === "Change") {
        RECORD_OBJ[ID] = NAME;
      }
    } else {
      RECORD_OBJ[ID] = NAME;
    }
  });

  record.forEach((string) => {
    const [TYPE, ID, _] = string.split(" ");

    if (TYPE === "Enter") {
      answer.push(`${RECORD_OBJ[ID]}님이 들어왔습니다.`);
    }
    if (TYPE === "Leave") {
      answer.push(`${RECORD_OBJ[ID]}님이 나갔습니다.`);
    }
  });

  return answer;
}

// solution([
//   "Enter uid1234 Muzi",
//   "Enter uid4567 Prodo",
//   "Leave uid1234",
//   "Enter uid1234 Prodo",
//   "Change uid4567 Ryan",
// ]);
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// solution([
//   "Enter uid123 AAA",
//   "Enter uid456 BBB",
//   "Enter uid789 CCC",
//   "Leave uid123",
//   "Enter uid123 TTT",
//   "Leave uid456",
//   "Change uid789 KKK",
// ]);
// ["TTT님이 들어왔습니다.", "BBB님이 들어왔습니다.", "KKK님이 들어왔습니다.", "TTT님이 나갔습니다.", "TTT님이 들어왔습니다.", "BBB님이 나갔습니다."]
