// 2022.09.27
function solution(clothes) {
  let answer = 1;
  const map = new Map();

  for (let i = 0; i < clothes.length; i++) {
    let type = clothes[i][1];

    map.set(type, (map.get(type) || 0) + 1);
  }

  for (let [_, v] of map.entries()) {
    answer = answer * (v + 1);
  }

  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]); // 5
