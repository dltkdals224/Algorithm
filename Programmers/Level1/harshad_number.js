function solution(x) {
    let res;

    if (x > 1 && x < 10) {
        return true;
    } else if (x > 10 && x < 100) {
        res = Math.floor(x / 10) + (x % 10);
    } else if (x > 100 && x < 1000) {
        res = Math.floor(x / 100) + Math.floor((x - Math.floor(x / 100) * 100) / 10) + (x % 10);
    } else if (x > 1000 && x < 10000) {
        //하다보니까 존나 무식한 방법이라는걸 알게됨
        res = Math.floor(x / 1000) + Math.floor((x - Math.floor(x / 1000) * 1000) / 100) + Math.floor(((x - Math.floor(x / 1000) * 1000 - Math.floor((x - Math.floor(x / 1000) * 1000) / 100) * 100) / 10)) + (x % 10);
    } else if (x == 1 || x == 10 || x == 100 || x == 1000 || x == 10000) {
        return true;
    }

    if (x % res == 0)
        return true;
    else
        return false;
}


//New Information
//없음


// split을 이용한 다른 풀이법
/*
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log(Harshad(148))
  */

//parseInt를 통한 풀이도 가능할듯?
//배열을 통한 접근은 수 나누기에 더 편리하긴 하니까.