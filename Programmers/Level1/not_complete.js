//2021.09.23
//미완성
function solution(participant, completion) {
  if (participant.length !== 1)
    for (let i = 0; i < completion.length; i++) {
      for (let j = 0; j < participant.length; j++) {
        if (participant[j] == completion[i]) {
          participant.splice(j, 1);
        }
      }
    }
  else return [];
  return String(participant);
}
