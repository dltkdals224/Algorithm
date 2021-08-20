//핸드폰 숫자 숨기기
function solution(phone_number) {
    let answer = '';
    if (phone_number.length >= 4 && phone_number.length <= 20) {
        if (phone_number.length == 4) {
            answer = phone_number.substring(0, 4);
        } else {
            //해당 배열 우선 선언 안하면 정상작동 되지 않음
            let erase_num = '';
            let last_num = '';
            last_num = phone_number.substring(phone_number.length - 4, phone_number.length);
            for (let k = 0; k < phone_number.length - 4; k++) {
                erase_num = erase_num.concat("*");
            }
            answer = erase_num.concat(last_num);
        }
        return answer;
    } else
    ;
}

//정규식 풀이법
/*
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));
*/