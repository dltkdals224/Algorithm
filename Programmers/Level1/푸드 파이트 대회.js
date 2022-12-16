// 2022.12.16
function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    const ONE_SIDE_COUNT = Math.floor(food[i] / 2);
    answer += String(i).repeat(ONE_SIDE_COUNT);
  }

  return answer + "0" + answer.split("").reverse().join("");
}

// solution([1, 3, 4, 6]); //"1223330333221"
