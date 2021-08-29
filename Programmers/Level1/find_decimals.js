//2021.08.30
function solution(n) {
    let answer = 0;

    ////시간초과 발생
    /*
    let count = 1; //소수의 개수 세는 용도
    if (n >= 2 && n < 1000000) {
        if (n == 2)
            return 1;
        else {
            for (let i = 3; i <= n; i++, count++)
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        count--;
                        break;
                    }
                }
            answer = count;
        }
    } else
    ;
    */

    return answer;
}