//2021.10.29
function solution(arr) {
  let ans = -1;

  let GCD = 0;
  let LCM = 0;

  //최대 공약수
  function find_GCD(n, m) {
    let big_num = Math.max(n, m);
    let small_num = Math.min(n, m);

    let remainder = big_num % small_num;

    //실행부
    if (remainder == 0) GCD = small_num;
    else find_GCD(remainder, small_num); //이렇게 재귀로 해결할 수 있구나.
    return GCD;
  }

  //최소 공배수
  function find_LCM(n, m) {
    let big_num = Math.max(n, m);
    let small_num = Math.min(n, m);

    let remainder = big_num % small_num;

    //실행부
    if (remainder == 0) LCM = big_num;
    else LCM = (big_num * small_num) / find_GCD(n, m); //최소 공배수는 최대공약수를 이용해 구할 수 있다.
    return LCM;
  }

  if (arr.length == 1) {
    ans = arr[0];
  } else if (arr.length == 2) {
    ans = find_LCM(arr[0], arr[1]);
  } else
    for (let n = 2; n < arr.length; n++) {
      ans = find_LCM(ans, arr[n]);
    }

  console.log(ans);
  return ans;
}
