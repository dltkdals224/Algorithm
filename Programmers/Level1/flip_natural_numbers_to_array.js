//2021.08.23
function solution(n) {
    let answer = [];

    if ((n >= 1 && n <= 10000000000) && n % 1 == 0) {
        let tmp = String(n);
        let arr = tmp.split('', tmp.length);
        //여기서 ["1","2","3","4","5"]꼴

        for (let i = 0; i < tmp.length; i++)
            arr[i] = Number(arr[i]);

        answer = arr.reverse();
    }

    return answer;
}


//New Information
//String(), Number()
//split()
//reverse()


//map이용한 다른 풀이법
/*
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
*/