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
      forwardIndex++;
      reverseIndex--;

      count++;
    } else {
      reverseIndex--;

      count++;
    }
  }

  return count;
}

solution([70, 50, 80, 50], 100); // 3
solution([70, 80, 50], 100); // 3

// 후기

// push(),pop()연산의 시간복잡도는 O(1)이지만,
// shift()연산의 시간복잡도는 O(n)을 갖는다.

// 따라서 JS에서 Queue를 구현하기 위해서는 직접 구현해야 한다.
// (N이 1000이하의 수라면 shift()연산을 사용해도 문제 없을 것이라고 함.)
