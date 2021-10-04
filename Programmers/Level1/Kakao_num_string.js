//2021.10.05
//일시 정지
function solution(s) {
  let ans = "";

  rejexForZero = /zero/gi;
  rejexForOne = /one/gi;
  rejexForTwo = /two/gi;
  rejexForThree = /three/gi;
  rejexForFour = /four/gi;
  rejexForFive = /five/gi;
  rejexForSix = /six/gi;
  rejexForSeven = /seven/gi;
  rejexForEight = /eight/gi;
  rejexForNine = /nine/gi;

  //   ans = s.replace(rejexForZero, "0");
  //   ans = s.replace(rejexForOne, "1");
  //   ans = s.replace(rejexForTwo, "2");
  //   ans = s.replace(rejexForThree, "3");
  //   ans = s.replace(rejexForFour, "4");
  //   ans = s.replace(rejexForFive, "5");
  //   ans = s.replace(rejexForSix, "6");
  ans = s.replace("seven", "7");
  ans = s.replace(rejexForEight, "8");
  ans = s.replace(rejexForNine, "9");

  console.log(ans);
  return ans;
}

solution("one4seveneight");
