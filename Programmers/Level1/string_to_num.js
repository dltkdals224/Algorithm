//2021.08.26
function solution(s) {
    let answer = 0;

    let arr = s.split('');
    if (arr[0] = '-') {
        answer = Number(s);
    } else
        answer = Number(s) * (-1);

    return answer;
}


//다른 풀이 WOW
/*
function strToInt(str){
  return str/1
  }
*/