//2021.08.22
function solution(n) {
    let answer = 0;
    if (n >= 1 && n <= 50000000000000) {
        if (Math.sqrt(n) % 1 == 0) {
            let k = 0;
            k = Math.sqrt(n);
            answer = (k + 1) * (k + 1);
        } else
            answer = -1;
    }
    return answer;
}


//New Information
//Math.sqrt //그 외 Math함수 MDN살펴볼 것.


//다른풀이 필요없음.