//2021.10.04
//왜 안되는지 모르겠네.
// 참고 : 나와같은 코드 작성하신 분 - https://my-t-space.tistory.com/16
function solution(numbers, hand) {
  let ans = "";
  let LH = 10; //왼손 위치 *로 설정
  let RH = 12; //오른손 위치 #으로 설정

  function checkLength(a, b) {
    if (b == 0) {
      b = 11;
    }
    if (Math.abs(a - b) == 1 || Math.abs(a - b) == 3) return 1;
    else if (
      Math.abs(a - b) == 2 ||
      Math.abs(a - b) == 4 ||
      Math.abs(a - b) == 6
    )
      return 2;
    else if (
      Math.abs(a - b) == 5 ||
      Math.abs(a - b) == 7 ||
      Math.abs(a - b) == 9
    )
      return 3;
    else return 4;
  }

  for (let n = 0; n < numbers.length; n++) {
    if (RH == 0) RH = 11;
    if (LH == 0) LH = 11;
    //
    if (numbers[n] == 1 || numbers[n] == 4 || numbers[n] == 7) {
      ans += "L";
      LH = numbers[n];
      continue;
    } else if (numbers[n] == 3 || numbers[n] == 6 || numbers[n] == 9) {
      ans += "R";
      RH = numbers[n];
      continue;
    } else {
      if (checkLength(LH, numbers[n]) < checkLength(RH, numbers[n])) {
        ans += "L";
        LH = numbers[n];
        continue;
      } else if (checkLength(LH, numbers[n]) > checkLength(RH, numbers[n])) {
        ans += "R";
        RH = numbers[n];
        continue;
      } else {
        if (hand == "left") {
          ans += "L";
          LH = numbers[n];
          continue;
        } else {
          ans += "R";
          RH = numbers[n];
          continue;
        }
      }
    }
  }

  console.log(ans);
  return ans;
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
