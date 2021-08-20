//두 행렬의 합
function solution(arr1, arr2) {
    //크기가 같은 두 행렬만 가능.
    //answer=[[]]; 의 선언에서는 작동 안하는가?
    var answer = [];

    for (let i = 0; i < arr1.length; i++) {
        //2차원 배열을 내부에서 설정
        answer[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    //console.log(solution([[1,2], [2,3]], [[3,4],[5,6]]));
    return answer;
}


//map을 이용한 다른사람의 풀이
/* function sumMatrix(A,B){ return A.map((a,i) => a.map((b, j) => b + B[i][j])); }
 // 아래는 테스트 출력
 console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))
 */