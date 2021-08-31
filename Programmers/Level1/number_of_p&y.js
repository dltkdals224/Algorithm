//2021.08.31
function solution(s) {
    let answer = true;
    let countP = 0;
    let countY = 0;

    if (s.length <= 50) {
        let arr = s.split('');

        for (let i = 0; i < s.length; i++) {
            if (arr[i] == 'p' || arr[i] == 'P')
                countP++;
            else if (arr[i] == 'y' || arr[i] == 'Y')
                countY++;
        }
        if (countP == countY)
            answer = true;
        else
            answer = false;
    }

    return answer;
}


//다른 풀이
//한줄 완성 ㅋㅋ
/*
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
*/