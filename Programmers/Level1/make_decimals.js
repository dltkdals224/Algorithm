//2021.09.29
function solution(nums) {
  let tmp = [];
  let notAns = [];

  //가능한 모든 수
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        tmp.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  //소수확인
  for (let t = 0; t < tmp.length; t++) {
    for (let p = 2; p < tmp[t]; p++) {
      if (tmp[t] % p == 0) {
        p = 2;
        notAns.push(tmp[t]);
        break;
      }
    }
  }

  //filter를 통한 차집합
  return tmp.filter((x) => !notAns.includes(x)).length;
}

//new information
//filter와 includes를 통한 차집합 연산
