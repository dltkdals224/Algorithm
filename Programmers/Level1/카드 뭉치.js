// 2023.02.20
function solution(cards1, cards2, goal) {
  let answer = "Yes";

  cards1.reverse();
  cards2.reverse();

  goal.forEach((target) => {
    if (target === cards1[cards1.length - 1]) {
      cards1.pop();
      return;
    }
    if (target === cards2[cards2.length - 1]) {
      cards2.pop();
      return;
    }
    answer = "No";
  });

  return answer;
}

// solution(
//   ["i", "drink", "water"],
//   ["want", "to"],
//   ["i", "want", "to", "drink", "water"]
// ); // "Yes"

// solution(
//   ["i", "water", "drink"],
//   ["want", "to"],
//   ["i", "want", "to", "drink", "water"]
// ); // "No"
