//2021.09.21
function solution(nums) {
  let tmp = new Set(nums);
  let tmpArr = [...tmp]; //...의 사용용도 알아볼 필요.

  return tmpArr.length > nums.length / 2 ? nums.length / 2 : tmpArr.length;
}

//New Information
//[...~]
