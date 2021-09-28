//2021.09.23
//미완성

//참고 : https://velog.io/@yunsungyang-omc/JS-%EB%B0%B0%EC%97%B4%EC%97%90%EC%84%9C-%EC%A4%91%EB%B3%B5-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0
// function solution(participant, completion) {
//   console.log(
//     participant.filter((item, index) => {
//       participant.indexOf(item) !== index;
//     })
//   );
function solution(participant, completion) {
  let newParticipant = new Set(participant);
  let newCompletion = new Set(completion);

  console.log(newParticipant);

  if (newParticipant.length == newCompletion.length) {
    // 중복이 있을 경우 중복인자 개수 파악해서 다른거 리턴때려야 함
  } else return String(participant.filter((x) => !completion.includes(x)));
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "mislav", "ana"]);
