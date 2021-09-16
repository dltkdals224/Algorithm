//2021.09.16
function solution(numbers) {
    //모든 합 찾으면서 중복 제거 하는 함수
    function findAllSum(n) {
        let tmp = [];
        let k = 0;

        for (let i = 0; i < (n.length * (n.length - 1)) / 2; i++) {
            for (let j = i + 1; j < n.length; j++) {
                tmp[k] = n[i] + n[j];
                k++;
            }
        }

        console.log(Array.from(new Set(tmp)));
        return Array.from(new Set(tmp));
    }

    //정렬 후 리턴
    return findAllSum(numbers).sort((a, b) => {
        return a - b;
    })
}


//New informtion
//자바스크립트 배열의 중복 제거
/*
1)indexOf() + filter()
2)includes()
3)Set객체 사용 <-- 내가 사용한 것.
*/