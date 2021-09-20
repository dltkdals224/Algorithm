//2021.09.20
function solution(left, right) {
    let answer = 0;

    //약수의 개수 찾는 함수
    function findFactorsNum(n) {
        let num = 0;
        for (let t = 1; t <= n; t++) {
            if (n % t == 0)
                num++;
        }
        return num;
    }

    //약수의 개수 짝/홀 판별 후 계산
    for (let tmp = left; tmp <= right; tmp++) {
        if (findFactorsNum(tmp) % 2 == 0) {
            answer += tmp;
        } else
            answer -= tmp;
    }

    return answer;
}


//다른풀이
/*
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
*/