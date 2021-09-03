//2021.09.03
function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] != arr[i])
            answer.push(arr[i]);
    }

    return answer;
}


//다른 풀이 //filter로 고민 1시간 했는데 하
/*
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
*/