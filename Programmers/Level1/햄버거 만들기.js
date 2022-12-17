function solution(ingredient) {
  var answer = 0;

  let i = 0;
  let latest = [0];

  while (i < ingredient.length - 3) {
    if (
      ingredient[i] == 1 &&
      ingredient[i + 1] == 2 &&
      ingredient[i + 2] == 3 &&
      ingredient[i + 3] == 1
    ) {
      answer++;
      ingredient.splice(i, 4);

      i = latest.pop();
    } else if (ingredient[i] == 1) {
      latest.push(i);
      i++;
    } else i++;
  }

  return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); // 2
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); // 0
