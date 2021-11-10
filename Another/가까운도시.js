// 2021.11.11
/*
직선으로 가장 가까운 도시 (2019년 사용)

일반적인 직교 평면 위에 여러개의 도시가 존재합니다.
각 도시는 정수 좌표 교차점 (x,y)에 존재합니다.
도시의 개수 n, 도시의 이름이 담긴 배열 City, 도시 별 x좌표를 갖는 배열 X, 도시 별 y좌표를 갖는 배열 Y가 주어졌을 때, 
각 도시에 대해 X나 Y좌표가 같은 도시 중 가장 가까운 도시를 찾으세요.
그런 도시가 존재하지 않으면 NONE을 반환하세요.
임의의 도시 중 두 도시 이상이 같은 거리에 있다면 사전순서대로 앞선 이름을 출력합니다.
이때 거리는 평면에서의 유클리드 거리를 말합니다.

ex)
solution(3, ["fastcity", "bigbanana", "xyz"], [23, 23, 23], [1, 10, 20]); //[ 'bigbanana', 'fastcity', 'bigbanana' ]
solution(3, ["london", "warsaw", "hackerland"], [1, 10, 20], [1, 10, 10]); //[ 'NONE', 'hackerland', 'warsaw' ]
solution(
  5,
  ["green", "red", "blue", "yellow", "pink"],
  [100, 200, 300, 400, 500],
  [100, 200, 300, 400, 500]
);
//[ 'NONE', 'NONE', 'NONE', 'NONE', 'NONE' ]
*/
function solution(n, City, X, Y) {
  let ans = [];
  let obj = [];
  let NONE = -2;
  let distanceArr = [];
  let sameDistanceCity = [];

  //객체
  function cityObj(city, x, y, tmp) {
    this.city = city;
    this.x = x;
    this.y = y;
    this.distance = 0;
  }
  //객체 생성
  for (let i = 0; i < n; i++) {
    obj[i] = new cityObj(City[i], X[i], Y[i], -1);
  }

  //작업 시작
  for (let i = 0; i < City.length; i++) {
    for (let j = 0; j < City.length; j++) {
      if (X[i] == X[j]) {
        obj[j].distance = Math.abs(Y[i] - Y[j]); // Math.abs : 절댓값
        NONE++;
      }
      if (Y[i] == Y[j]) {
        obj[j].distance = Math.abs(X[i] - X[j]);
        NONE++;
      }
    }
    // None (같은 점 지나는 것 때문에 2는 자동증가.)
    if (NONE == 0) {
      ans.push("NONE");
    }
    // Not None
    else {
      // 0이 아닌(본인 아닌) 점에 대한 distance를 distanceArr 배열에 추가
      for (let j = 0; j < City.length; j++) {
        if (obj[j].distance != 0) {
          distanceArr.push(obj[j].distance);
        }
      }
      // 해당 배열 오름차순 정렬
      distanceArr.sort((a, b) => {
        return a - b;
      });
      // Not None 중 same distance존재 X
      if (distanceArr[0] != distanceArr[1]) {
        for (let j = 0; j < City.length; j++) {
          if (obj[j].distance == distanceArr[0]) {
            ans.push(obj[j].city);
          }
        }
      } // Not None 중 same distance존재 O
      else {
        for (let j = 0; j < City.length; j++) {
          if (obj[j].distance == distanceArr[0]) {
            sameDistanceCity.push(obj[j].city);
          }
        }
        // 해당 배열 이름순 정렬
        sameDistanceCity.sort();
        ans.push(sameDistanceCity[0]);
      }
    }

    //초기화 작업
    for (let j = 0; j < City.length; j++) {
      obj[j].distance = 0;
    }
    NONE = -2;
    distanceArr = [];
  }

  console.log(ans);
  return ans;
}

solution(3, ["fastcity", "bigbanana", "xyz"], [23, 23, 23], [1, 10, 20]);
solution(3, ["london", "warsaw", "hackerland"], [1, 10, 20], [1, 10, 10]);
solution(
  5,
  ["green", "red", "blue", "yellow", "pink"],
  [100, 200, 300, 400, 500],
  [100, 200, 300, 400, 500]
);
