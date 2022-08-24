// 2022.08.24
function solution(num) {
  let answer = [];

  // 시간 복잡도 O(n^2) (3 ~ 100) x (1 ~ 100,000)
  num.map((v) => {
    if (isPrimeNumber(deleteFrontZeroNum(reverseNumber(v)))) {
      answer.push(deleteFrontZeroNum(reverseNumber(v)));
    }
  });

  return answer;
}

// 수를 뒤집는 함수
const reverseNumber = (num) => {
  return Number(String(num).split("").reverse().join(""));
};

// 앞자리 0 없애는 함수
const deleteFrontZeroNum = (num) => {
  return Number(String(num).replace(/^0+/, ""));
};

// 소수인지 판단하는 함수
const isPrimeNumber = (num) => {
  if (num === 1) {
    return false;
  }
  let tmp = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      tmp++;
    }
  }
  if (tmp > 1) {
    return false;
  }
  return true;
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
// 23 2 73 2 3
console.log(solution([1, 2, 3, 70]));
// 2, 3, 7

// 풀이
// 마찬가지로 시간 복잡도 O(n^2)

// function isPrime(num){
//     if(num===1) return false;
//     for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
// function solution(arr){
//     let answer=[];
//     for(let x of arr){
//         let res=0;
//         while(x){
//             let t=x%10;
//             res=res*10+t;
//             x=parseInt(x/10);
//         }
//         if(isPrime(res)) answer.push(res);
//     }
//     return answer;
// }
