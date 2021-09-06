function solution(s) {
    let answer = '';
    if (s.length % 2 == 1)
        answer = s[Math.floor(s.length / 2)];
    else
        answer = s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)];
    return answer;
}


//다른 풀이
/*
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
*/


//다른 풀이 2
/*
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}
*/