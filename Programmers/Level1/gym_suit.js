//2021.10.03
function solution(n, lost, reserve) {
  let ans = 0;
  let student = [];

  function studentObj(number, suit, spare_suit) {
    this.number = number;
    this.suit = suit;
    this.spare_suit = spare_suit;
  }

  //학생에 객체 할당
  //student[0] 은 존재하지 않음.
  for (let t = 1; t <= n; t++) {
    //모두 여벌없이 개인것만 소유 가정
    student[t] = new studentObj(t, 1, 0);
  }

  //lost적용
  for (let t = 0; t < lost.length; t++) {
    student[lost[t]].suit = 0;
  }

  //reserve적용
  for (let t = 0; t < reserve.length; t++) {
    student[reserve[t]].spare_suit = 1;
  }

  //lost,reserve 동시인 학생 적용
  for (let t = 1; t <= n; t++) {
    if (student[t].suit == 0 && student[t].spare_suit == 1) {
      student[t].suit = 1;
      student[t].spare_suit = 0;
    }
  }

  //빌리기 과정
  //첫번째 학생이라면?
  if (student[1].suit == 0 && student[2].spare_suit == 1) {
    student[1].suit = 1;
    student[2].spare_suit = 0;
  }
  //그 외 학생에 대하여
  for (let t = 2; t < n; t++) {
    if (student[t].suit == 0) {
      //앞사람한테 먼저 빌리는 과정

      if (student[t - 1].spare_suit == 1) {
        student[t - 1].spare_suit = 0;
        student[t].suit = 1;
      } //뒷사람한테 빌리기
      else if (student[t + 1].spare_suit == 1) {
        student[t + 1].spare_suit = 0;
        student[t].suit = 1;
      }
    }
  }
  //마지막 학생
  if (student[n].suit == 0 && student[n - 1].spare_suit == 1) {
    student[n].suit = 1;
    student[n - 1].spare_suit = 0;
  }

  //수업 가능한 학생수 추출
  for (let t = 1; t <= n; t++) {
    if (student[t].suit == 1) ans++;
  }

  return ans;
}

//New Information
/*
배열 형태의 객체 관리
  function studentObj(number, suit, spare_suit) {
    this.number = number;
    this.suit = suit;
    this.spare_suit = spare_suit;
  }
*/

//다른 풀이
/*

*/
