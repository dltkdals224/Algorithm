//2021.11.20
function solution(dirs) {
  let ans = 0;
  let ansArr = [];

  const ansMap = {
    curLocationX: 0,
    curLocationY: 0,
    roadPassed: [[]],
  };

  for (let n = 0; n < dirs.length; n++) {
    dirs[n] === "U"
      ? ansMap.curLocationY++
      : dirs[n] === "R"
      ? ansMap.curLocationX++
      : dirs[n] === "D"
      ? ansMap.curLocationY--
      : ansMap.curLocationX--;

    if (ansMap.curLocationY !== 6 && dirs[n] === "U") {
      ansMap.roadPassed.push([ansMap.curLocationX, ansMap.curLocationY - 0.5]);
    }
    if (ansMap.curLocationY !== -6 && dirs[n] === "D") {
      ansMap.roadPassed.push([ansMap.curLocationX, ansMap.curLocationY + 0.5]);
    }
    if (ansMap.curLocationX !== 6 && dirs[n] === "R") {
      ansMap.roadPassed.push([ansMap.curLocationX - 0.5, ansMap.curLocationY]);
    }
    if (ansMap.curLocationX !== -6 && dirs[n] === "L") {
      ansMap.roadPassed.push([ansMap.curLocationX + 0.5, ansMap.curLocationY]);
    }

    if (ansMap.curLocationX < -5) {
      ansMap.curLocationX = -5;
    }
    if (ansMap.curLocationX > 5) {
      ansMap.curLocationX = 5;
    }
    if (ansMap.curLocationY < -5) {
      ansMap.curLocationY = -5;
    }
    if (ansMap.curLocationY > 5) {
      ansMap.curLocationY = 5;
    }
  }

  // 중복 제거 과정
  ansArr = removeDup(ansMap.roadPassed);
  ans = ansArr.length - 1;

  return ans;
}

// 이차원배열 중복 제거 함수(퍼옴)
// 한번 이해하고 적어놓는게 좋을듯.
function removeDup(arr) {
  return [...new Set(arr.join("|").split("|"))]
    .map((v) => v.split(","))
    .map((v) => v.map((a) => +a));
}
