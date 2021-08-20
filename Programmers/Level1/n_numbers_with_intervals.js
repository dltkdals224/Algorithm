//등차수열을 갖는 배열
function solution(x, n) {
    var answer = [];
    if ((x >= -10000000 && x <= 10000000) && (n >= 1 && n <= 1000)) {
        //반복문 단순변수 let으로 설정
        for (let k = 0; k < n; k++)
            answer[k] = x * (k + 1);
    }
    //console.log(answer);
    //배열 넘버 순서대로 넣은 후, 배열을 출력하면 해당내용이 이어져 나옴
    return answer;
}

solution(5, 2);