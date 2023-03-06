// 2023.03.07
function solution(n, m, section) {
  let answer = 0;

  while (section.length) {
    const TARGET = section.pop();
    while (TARGET - m + 1 <= section[section.length - 1]) {
      section.pop();
    }
    answer++;
  }

  return answer;
}

// solution(8, 4, [2, 3, 6]); // 2
// solution(5, 4, [1, 3]); // 1
// solution(4, 1, [1, 2, 3, 4]); // 4
// solution(6, 2, [1, 3, 5]); // 3
