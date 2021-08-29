//2021.08.29
function solution(seoul) {
    let answer = '';
    let index = 0;

    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] == 'Kim')
            index = i;
    }
    answer = `김서방은 ${index}에 있다`
    return answer;
}


//indexOf()사용한 풀이
/*
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
*/