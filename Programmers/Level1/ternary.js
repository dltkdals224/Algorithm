//2021.09.20
function solution(n) {
    let ans = 0;

    for (let t = 0; t < n.toString(3).length; t++) {
        ans += n.toString(3)[t] * Math.pow(3, t);
    }
    return ans;
}


//내가 하고싶었던 풀이
/*
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
*/