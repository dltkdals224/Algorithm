// 2022.12.28
function solution(cacheSize, cities) {
  let answer = 0;
  const CACHE_DATA = [];

  cities.forEach((city) => {
    const CITY_NAME = city.toUpperCase();

    if (!CACHE_DATA.includes(CITY_NAME)) {
      answer += 5;
      CACHE_DATA.push(CITY_NAME);
      if (CACHE_DATA.length > cacheSize) {
        CACHE_DATA.shift();
      }
    } else {
      answer += 1;
      CACHE_DATA.push(CITY_NAME);
      CACHE_DATA.splice(CACHE_DATA.indexOf(CITY_NAME), 1);
    }
  });

  return answer;
}

// solution(3, [
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
// ]); // 50

// solution(3, [
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "Jeju",
//   "Pangyo",
//   "Seoul",
// ]); // 21
