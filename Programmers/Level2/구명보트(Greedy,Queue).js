// 2022.09.27
function solution(people, limit) {
  let count = 0;

  // 오름차순 정렬
  people.sort((a, b) => {
    return a - b;
  });

  let forwardIndex = 0;
  let reverseIndex = people.length - 1;

  while (people.length !== 0) {
    // 전원 탈출 후 반복문도 탈출
    if (forwardIndex > reverseIndex) {
      break;
    }

    // 혼자 남은 경우
    if (forwardIndex === reverseIndex) {
      count++;
      break;
    }

    // main logic
    if (people[forwardIndex] + people[reverseIndex] <= limit) {
      // 둘이 탈 수 있나?
      forwardIndex++;
      reverseIndex--;

      count++;
    } else {
      // 그렇지 못한 경우라면 돼지는 혼자 타야해.
      reverseIndex--;

      count++;
    }
  }

  return count;
}

// 후기

// push(),pop()연산의 시간복잡도는 O(1)이지만,
// shift()연산의 시간복잡도는 O(n)을 갖는다.
// 따라서 JS에서 Queue를 구현하기 위해서는 직접 구현해야 한다.
// (N이 1000이하의 수라면 shift()연산을 사용해도 문제 없음.)

// 최대 인원이 둘로 정해져있어서 어렵지 않은 문제.
