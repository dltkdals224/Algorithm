//2021.08.30
function solution(str) {
    var answer = '';

    if (str.length >= 1) {
        let arr = str.split('');

        arr.sort();
        arr.reverse();

        for (let i = 0; i < arr.length; i++)
            answer += arr[i];
            //이 과정이 join으로 해결된다는 것만 좀 기억해라 제발
    }

    return answer;
}


//New Information
// 삼항연산자는 코드를 간결하게 하지만, 가독성 때문에 일반적으로 잘 사용하지 않는다.