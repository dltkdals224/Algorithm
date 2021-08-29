//2021.08.29
function solution(s) {
    let ans = true;
    let tmp = '';

    if (s.length == 4 || s.length == 6) {
        tmp = s.split('');
        for (let k = 0; k < tmp.length; k++)
            tmp[k] = Number(tmp[k]);

        console.log(tmp);

        for (let i = 0; i < tmp.length; i++) {
            if (Number.isNaN(tmp[i]))
                ans = false;
        }
    } else
        ans = false;

    return ans;
}


//New Information
//.isNan() - 주로 Number에 이어붙여서 사용 //오류 방지


//정규식을 이용한 다른풀이
/*
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
*/