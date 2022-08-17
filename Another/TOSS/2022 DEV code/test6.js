function solution(pin) {
  let answer = true;
  const PIN_ARR = pin.split("");

  // 4자리 모두 동일
  if (allEqualNumber(PIN_ARR)) {
    return false;
  }

  // 연속된 숫자 탐지
  if (consecutiveNumber(PIN_ARR)) {
    answer = false;
  }

  console.log(answer);
  return answer;
}

const allEqualNumber = (arr) => {
  return arr.every((v) => v === arr[0]);
};

const consecutiveNumber = (arr) => {
  ARR_LENGTH = arr.length;

  for (let i = 0; i < ARR_LENGTH - 2; i++) {
    if (
      // 내림
      (Number(arr[i]) - Number(arr[i + 1]) === 1 &&
        Number(arr[i + 1]) - Number(arr[i + 2]) === 1) ||
      (Number(arr[i]) - Number(arr[i + 1]) === -9 &&
        Number(arr[i + 1]) - Number(arr[i + 2]) === 1) ||
      // 오름
      (Number(arr[i]) - Number(arr[i + 1]) === -1 &&
        Number(arr[i + 1]) - Number(arr[i + 2]) === -1) ||
      (Number(arr[i]) - Number(arr[i + 1]) === -1 &&
        Number(arr[i + 1]) - Number(arr[i + 2]) === 9)
    ) {
      console.log(arr);
      return true;
    }
  }

  return false;
};

// 비유효
// 4자리 모두 동일
solution("0000") === false;
// 987, 876이 연속
solution("9876") === false;
// 123, 234가 연속
solution("1234") === false;
// 123이 연속
solution("1230") === false;
// 987이 연속
solution("2987") === false;
// 890이 연속
solution("1890") === false;
// 012가 연속
solution("0129") === false;

// 유효
solution("1398") === true;
solution("1478") === true;
solution("1097") === true;
solution("9013") === true;
