//2021.08.22
function solution(arr) {
    var answer = [];
    if (arr.length == 1)
        answer = [-1];
    else {
        let tmp = arr[0]; //가장 작은 원소
        let tmp_2 = 0; //가장 작은 원소의 인덱스
        for (let k = 1; k < arr.length; k++) {
            if (arr[k] < tmp) {
                tmp = arr[k];
                tmp_2 = k;
            }
        }
        arr.splice(tmp_2, 1);
        return arr;
    }
    return answer;
}


//New Information


//Math를 추가한 다른 풀이 //내 풀이가 나은듯
/*
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
*/