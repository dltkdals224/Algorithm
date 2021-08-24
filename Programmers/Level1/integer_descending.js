//2021.08.24
function solution(n) {
    let answer = 0;

    if ((n >= 1 && n <= 8000000000) && n % 1 == 0) {
        //문자열로 바꿔주기
        let tmp = String(n);
        //문자열 찢기
        let arr = tmp.split('', tmp.length);

        //다시 숫자로 바꿔주기
        for (let i = 0; i < tmp.length; i++)
            arr[i] = Number(arr[i]);

        //내림차순 정렬
        arr.sort(function (a, b) {
            return b - a;
        });
        //여기서 [8,7,3,2,1,1]상태

        //배열의 원소 정수형으로 꺼내기
        for (let k = 0; k < arr.length; k++) {
            answer += arr[k] * Math.pow(10, arr.length - k - 1);
        }

        return answer;
    }
}


//New Information
//sort()
//Math.pow(x,y)


//다른 풀이
/*
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}
*/