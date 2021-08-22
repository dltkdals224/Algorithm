//2021.08.22
function solution(n, m) {
    let answer = [];
    let get_GCD = 0;
    let get_LCM = 0;

    let GCD = 0;
    let LCM = 0;

    //최대 공약수
    function find_GCD(n, m) {
        let big_num = Math.max(n, m);
        let small_num = Math.min(n, m);

        let remainder = big_num % small_num;

        //실행부
        if (remainder == 0)
            GCD = small_num;
        else
            find_GCD(remainder, small_num); //이렇게 재귀로 해결할 수 있구나.
        return GCD;
    }

    //최소 공배수
    function find_LCM(n, m) {
        let big_num = Math.max(n, m);
        let small_num = Math.min(n, m);

        let remainder = big_num % small_num;

        //실행부
        if (remainder == 0)
            LCM = big_num;
        else
            LCM = (big_num * small_num) / find_GCD(n, m); //최소 공배수는 최대공약수를 이용해 구할 수 있다.
        return LCM;
    }

    get_GCD = find_GCD(n, m);
    get_LCM = find_LCM(n, m);
    answer = [get_GCD, get_LCM];

    return answer;
}


//New Information
//Math.max & Math.min
//GCD는 재귀함수, LCM은 GCD를 통해서 구할 수 있다.


//판별 수식과 재귀함수 이용한 다른 풀이
/*
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}
*/