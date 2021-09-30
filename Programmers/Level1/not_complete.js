//2021.09.23
//2021.09.30 도움을 받아 완료.

// function solution(participant, completion) {
//   let overlap = [];

//   if (participant.length == 1) return participant[0];
//   else {
//     for (let n = 0; n < participant.length; n++) {
//       if (
//         participant.filter((elem) => participant[n] == elem).length !==
//         completion.filter((elem) => participant[n] == elem).length
//       ) {
//         // console.log(participant[n]);
//         return participant[n];
//       }
//     }
//   }
// }
// for문 안의 filter가 O(n)의 시간복잡도를 가져서 이중 for문으로 구현되어 효용성 테스트를 통과하지 못한다.

//단순히 한명을 찾는 것 이므로 배열을 정렬한 후 다른 포인트만 찾으면 되는 문제였음.
function solution(participant, completion) {
  const total = participant.length;
  var answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < total; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}

//New Information
// 배열관련 시간복잡도
/*
1) push & pop : O(1)
2) unshift & unshift & splice : O(n)
3) sort : O(n log(n)) - 구현방식에 따라 다르다?
4) concat & slice & indexOf() : O(n)
5) filter & map & forEach & reduce : O(n)  ++ forEach보다 일반적 for문이 1.4배저옫 빠르다고 한다.
6) some & every : O(n)
// 다른 내장함수 시간복잡도 파악해놓는것도 도움이 될듯.
*/
// 객체 접근법
/*
const arr = ["1", "2", "3"];
let sangmin = new Set(arr);

console.log(sangmin); //Set(3) {'1','2','3'}
console.log(sangmin.size); //3
console.log(Object.keys(sangmin).length); //0
//key값이 따로 존재하지 않기 때문.
*/
