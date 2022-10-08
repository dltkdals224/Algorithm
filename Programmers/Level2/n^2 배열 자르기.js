// 2021.11.15
// 첫번째 풀이 : core dumped
// 이유 상세설명
/*
n의 범위가 107 까지 있기 때문에 코드를 정말 빡빡하게 짜야 합니다.

문제에서 left와 right를 제시한 만큼 left 전 의미없는 값들과 right 후 의미없는 값들은 아예 만들지 않고
스킵하는 방식으로 코드를 짜야 합니다.
그리고 배열의 초반에 같은 값이 연속되는 경우가 많기 때문에 해당 값들은 for문 없이 배열로 만들고 뒤의 연속적으로 증가하는 값만 for문으로 만들어 붙이는 방식이 for문을 적게 돌기 때문에 시간을 아낄 수 있었습니다.

즉 수많은 값들 중 left와 right 사이의 값만 만들 수 있다면 최상의 코드고 아무리 못해도 우리가 만들 값의 범위는
최대 (left - n) ~ (right + n) 사이의 값만 만들고 잘라야 시간초과가 나지 않으실 겁니다.
*/
function solution(n, left, right) {
  let ans = [];
  let share = 0;
  let remainder = 0;
  let arrLength = right - (left - 1);

  for (let t = 0; t < arrLength; t++) {
    share = Math.floor(left / n);
    remainder = left % n;
    ans.push(findNum(share, remainder));
    left++;
  }

  return ans;
}

function findNum(share, remainder) {
  if (share < remainder) {
    return remainder + 1;
  } else {
    return share + 1;
  }
}

// 스스로 굉장히 만족하는 코드
