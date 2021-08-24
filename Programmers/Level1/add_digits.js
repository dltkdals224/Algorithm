//2021.08.25
function solution(n) {
    var answer = 0;

    if ((n >= 1 && n <= 100000000) && n % 1 == 0) {
        let tmp = String(n);
        let arr = tmp.split('', tmp.length);

        for (let i = 0; i < tmp.length; i++)
            arr[i] = Number(arr[i]);
        for (let k = 0; k < arr.length; k++)
            answer += arr[k];
    }

    return answer;
}


//다른 풀이법 ( 계속 동일 )
/*
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
*/