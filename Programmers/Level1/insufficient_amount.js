//2021.09.14
function solution(price, money, count) {
    let total = 0; //총 이용료

    if (1 <= price <= 2500 && 1 <= money <= 1000000000 && 1 <= count <= 2500) {
        for (let i = 1; i <= count; i++) {
            total += price * i;
        }

        return money > total ? 0 : total - money;
    }
}

//다른 풀이
/*
const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);
*/