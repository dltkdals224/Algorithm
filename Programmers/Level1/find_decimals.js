//2021.08.30
function solution(n) {
    let answer = 0;

    ////시간초과 발생
    //시간 복잡도가 O(n)이하가 되도록 함수를 구성해야 한다.
    //해당 내용은 O(n^2)로 추정.
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


    //에라토스테네스의 체 원리 참고
    let arr = [];
    let count = 0;

    for (let k = 0; k <= n; k++) {
        arr.push(k);
    }

    //제거해주는 과정
    arr[0] = null;
    arr[1] = null;
    if (arr[n]) {
        for (let i = 2; i < Math.sqrt(n); i++) {
            for (let j = 2; i * j <= n; j++) {
                arr[i * j] = null;
            }
        }
    }

    //찾는 과정
    for (let t = 0; t < arr.length; t++) {
        if (arr[t] != null)
            count++;
    }


    answer = count;
    return answer;
}