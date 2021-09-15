//2021.09.02시작
//2021.09.15완료
function solution(strings, n) {

    function compare2(a, b) {
        for (let t = 0; t < Math.max(a.length, b.length); t++) {
            if (b[t] === a[t]);
            else if (b[t] > a[t])
                return -1;
            else return 1;
        }
    }

    function compare(a, b) {
        if (b[n] > a[n])
            return -1;
        else if (b[n] < a[n])
            return 1;
        else
            return compare2(a, b);
    }

    console.log(strings.sort(compare));
    return strings.sort(compare);
    //sort MDN확인  -> return 값 0보다 클 경우, b전에 a 
    //              -> return 값 0보다 작을 경우, a전에 b 정렬
}

solution(["sun", "bed", "car", "cax"], 1);


//다른 풀이
/*
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
*/