//2021.09.02
function solution(arr, divisor) {
    let answer = [];
    let noElement = 0;

    for (let k = 0; k < arr.length; k++) {
        if (arr[k] % divisor == 0) {
            answer.push(arr[k]);
        } else noElement++;
    }

    if (noElement == arr.length)
        answer = [-1];
    else {
        //sort 작성 시, 임의로 함수 작성해주는 습관 들이면 될듯.
        answer = answer.sort(function (a, b) {
            return a - b;
        });
    }

    return answer;
}


//filter이용 다른풀이
/*
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
*/