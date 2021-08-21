//8월 21일
//수정 필요
function solution(num) {
    let answer = '';
    if (num % 1 == 0 && (num >= -2147483648 && num <= 2147483647)) {
        if (num % 2 == 0 || num == 0)
            answer = "Even";
        else
            answer = "Odd";
    } else
        return;
    return answer;
}


//New Information
//isNumber()
//isNaN()


//판별 수식을 이용한 다른 풀이
/*
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
*/

