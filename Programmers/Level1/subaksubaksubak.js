//2021.08.26
function solution(n) {
    let answer = '';
    let arr = [];
    if ((n >= 1 && n <= 10000) && n % 1 == 0) {
        if (n == 1)
            arr.push("수")
        else {
            for (let i = 1; i * 2 <= n; i++)
                arr.push("수박");
            if (n % 2 == 1)
                arr.push("수");
        }
    }
    answer = arr.join('');
    return answer;
}


//New Information
//.push
//.pop


//.repeat을 이용한 다른 풀이
/*
const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}
*/