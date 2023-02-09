// 2023.02.09
function solution(w, h) {
  let passingBox = 0;

  for (let i = 0; i < w; i++) {
    // 자료형 이슈 (h / w * (i+1) 과 h / w * i 형식이면 특정 test case를 통과하지 못함.)
    // 정확한 원리는 모르지만 나눗셈연산을 마지막으로 미뤄야 한다.
    passingBox += Math.ceil((h * (i + 1)) / w) - Math.floor((h * i) / w);
  }

  return w * h - passingBox;
}

solution(1, 1);
solution(8, 12); // 80
solution(3, 11); // 20
