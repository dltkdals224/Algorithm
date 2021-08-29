//2021.08.29
function solution(s) {
    let tmp = '';

    if (s.length == 4 || s.length == 6) {
        tmp = s.split('');
        console.log(tmp);
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i] == NaN)
                return false;
            else
                return true;
        }
    } else
        return false;
}