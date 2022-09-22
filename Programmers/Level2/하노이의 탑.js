// 2022. 08. 22
function solution(n) {
  return move(1, 3, 2, n);
}

// 재귀를 생각하기 좋은 문제.
const move = (departure, destination, waypoint, numberOfPlate) => {
  if (numberOfPlate === 1) return [[departure, destination]];
  return [
    ...move(departure, waypoint, destination, numberOfPlate - 1),
    ...move(departure, destination, waypoint, 1),
    ...move(waypoint, destination, departure, numberOfPlate - 1),
  ];
};
