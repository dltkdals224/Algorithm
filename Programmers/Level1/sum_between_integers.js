//2021.09.01
function solution(a, b) {
    let answer = 0;

    let tall = b;
    let small = a;

    if (a > b) {
        tall = a;
        small = b;
    }

    for (let i = Math.ceil(small); i <= Math.floor(tall); i++)
        answer += i;

    return answer;
}