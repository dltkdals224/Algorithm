function solution(n) {
  const convertedNum = (recursion = (n) => {
    let 몫 = 0;
    let 나머지 = 0;

    if (n % 3 === 0) {
      몫 = Math.floor(n / 3) - 1;
      나머지 = 3;
    } else {
      몫 = Math.floor(n / 3);
      나머지 = n % 3;
    }

    return 몫 <= 3 ? `${몫}${나머지}` : `${recursion(몫)}${나머지}`;
  })(n);

  return convertedNum.replace(/(^0+)/, "").replace(/3/g, "4");
}

// solution(1); // 1
// solution(2); // 2
// solution(3); // 4
// solution(4); // 11
// solution(11); // 42
// solution(13); // 111
// solution(40); // 1111

// 후기

// '124의 나라'를 보고 3진법 변환을 생각하는건 자연스러운 생각의 흐름이다.
// '012의 나라'라고 한다면 난이도 0을 줘도 되는 문제지만,
// '124의 나라'는 0을 사용하지 않기 때문에 나누어 떨어지는 경우를 표현할 수 없다.
