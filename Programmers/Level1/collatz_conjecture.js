//8월 20일
function solution(num) {
    for (let count = 0; count < 500; count++) {
        if (num == 1)
            return count;
        else if (num % 2 == 0)
            num = num / 2;
        else
            num = num * 3 + 1;
    }
    return -1;
}

// 내 풀이가 더 나은듯
/* 
function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
*/