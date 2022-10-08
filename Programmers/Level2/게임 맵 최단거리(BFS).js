// 2022.10.07
let infinite = 99999;
let directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function solution(maps) {
  let distanceMap = new Array(maps.length)
    .fill(0)
    .map((e) => new Array(maps[0].length).fill(infinite));

  const queue = new Queue();

  // [0,0]과 distance = 1 삽입
  queue.add([0, 0, 1]);

  while (queue.size() !== 0) {
    let cur = queue.size() !== 0 && queue.storage[queue.front];
    queue.popleft();

    let row = cur[0];
    let col = cur[1];
    let distance = cur[2];

    if (row < 0 || row >= maps.length || col < 0 || col >= maps[0].length)
      continue;
    if (maps[row][col] == 0) continue;
    if (distanceMap[row][col] > distance) {
      distanceMap[row][col] = distance;
      for (let direction of directions) {
        queue.add([row + direction[0], col + direction[1], distance + 1]);
      }
    }
  }

  return distanceMap[distanceMap.length - 1][distanceMap[0].length - 1] !==
    infinite
    ? distanceMap[distanceMap.length - 1][distanceMap[0].length - 1]
    : -1;
}

class Queue {
  // 큐 초기화
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  // 크기
  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  // 데이터 삽입
  add(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  // 데이터 추출
  popleft() {
    let tmp;
    if (this.front == this.rear) {
      tmp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      tmp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return tmp;
  }
}

// !KEY POINT! : DFS로 효율성을 통과할 수 없는 대표적인 문제

// const solution_DFS = (maps) => {
//   let infinite = 99999;
//   let distanceMap = new Array(maps.length)
//     .fill(0)
//     .map((e) => new Array(maps[0].length).fill(infinite));

//   // distanceMap사용!
//   (dfsRecursive = (maps, row, col, distanceMap, distance) => {
//     let directions = [
//       [1, 0],
//       [0, 1],
//       [-1, 0],
//       [0, -1],
//     ];

//     // Map이탈
//     if (row < 0 || col < 0 || row >= maps.length || col >= maps[0].length) {
//       return;
//     }
//     // 길 없음
//     if (maps[row][col] === 0) {
//       return;
//     }

//     if (distanceMap[row][col] > distance) {
//       distanceMap[row][col] = distance;
//       for (let direction of directions) {
//         dfsRecursive(
//           maps,
//           row + direction[0],
//           col + direction[1],
//           distanceMap,
//           distance + 1
//         );
//       }
//     }
//   })(maps, 0, 0, distanceMap, 1);

//   return distanceMap[distanceMap.length - 1][distanceMap[0].length - 1] !==
//     infinite
//     ? distanceMap[distanceMap.length - 1][distanceMap[0].length - 1]
//     : -1;
// };

solution([
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
]); // 9

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]); // 11

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]); // -1
