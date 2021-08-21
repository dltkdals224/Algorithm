//8월 21일
function solution(arr) {
    let answer = 0;
    let sum = 0;
    for (let k = 0; k < arr.length; k++) {
        sum += parseInt(arr[k]);
    }
    answer = sum / arr.length;
    return answer;
}

//New Information
//parseInt - 문자열의 정수화(like atoi)

//reduce 이용한 풀이
/*
function average(array){
    return array.reduce((a, b) => a + b) / array.length;
  }
*/