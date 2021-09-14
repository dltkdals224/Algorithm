//2021.09.15
function solution(a, b) {
    let someDay = new Date(2016, a - 1, b);

    let ans = someDay.getDay();

    return (ans == 0) ? 'SUN' : (ans == 1) ? 'MON' : (ans == 2) ? 'TUE' : (ans == 3) ? 'WED' : (ans == 4) ? 'THU' : (ans == 5) ? 'FRI' : 'SAT';
}


//New Information
//Date의 MDN을 자세히 봐볼것. 유용하게 사용 할 수 있음.
//3항 연산자는 
/*
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}
== 위와 아래는 동일 ==
function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
꼴로 사용 할 수 있다
*/


//Date()객체를 쓰는 행위가 알고리즘 문제 풀이의 본질을 해친다는 댓글을 보았다. 일리가 없지는 않아.
//여태까지의 풀이가 헛된건 아닌듯.
//그래도 메소드를 적절히 사용하는게 좋은 코딩 방식일듯.