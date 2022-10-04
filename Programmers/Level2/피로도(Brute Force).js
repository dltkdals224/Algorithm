// 2022.10.04
function solution(k, dungeons) {
  const DUNGEON_CLEAR_ORDER_PERMUTATIONS = getPermutations(
    dungeons,
    dungeons.length
  );
  const DUNGEON_NUMBER = dungeons.length;
  let maxNumberOfClear = 0;

  for (let i = 0; i < DUNGEON_CLEAR_ORDER_PERMUTATIONS.length; i++) {
    let residualFatigue = k;
    let value = 0;

    for (let j = 0; j < DUNGEON_NUMBER; j++) {
      if (residualFatigue >= DUNGEON_CLEAR_ORDER_PERMUTATIONS[i][j][0]) {
        residualFatigue =
          residualFatigue - DUNGEON_CLEAR_ORDER_PERMUTATIONS[i][j][1];
        value++;
      } else {
      }
    }
    if (value > maxNumberOfClear) {
      maxNumberOfClear = value;
    }
  }

  return maxNumberOfClear;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

// 후기
// 처음 봤을 때는 잔여 피로도와 소모 피로도의 상관관계에 대해 식을 어떻게 세워야 하나 고민.
// 하지만 제공되는 dungeons의 length가 8 이하로 제한됨을 보았다면 Brute Force로 접근해야 함을 알 수 있다.
