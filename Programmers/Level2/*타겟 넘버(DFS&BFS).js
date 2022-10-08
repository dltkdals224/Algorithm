// 2022.08.26
function dfs(startIndex, numbers, target) {
  return (
    // 즉시실행 함수로 재귀
    (function dfsRecursive(num, index) {
      if (index === numbers.length) {
        if (num === target) {
          return 1;
        } else {
          return 0;
        }
      }

      // 가지치기 과정
      // 좌항은 numbers의 값을 더하거나 뺀 값이고, 우항은 현 index
      return (
        dfsRecursive(num + numbers[index], index + 1) +
        dfsRecursive(num - numbers[index], index + 1)
      );
    })(0, startIndex)
  );
}

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(elem) {
    return this.items.push(elem);
  }
  dequeue() {
    return this.items.shift();
    // target number 1000이하라 shift()사용 선호.
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

function bfs(startIndex, numbers, target) {
  const queue = new Queue();
  queue.enqueue([numbers[startIndex], -numbers[startIndex]]);
  let index = startIndex + 1;
  let answer = 0;

  while (!queue.isEmpty()) {
    let list = queue.dequeue();

    if (index !== numbers.length) {
      let newList = [];

      for (let num of list) {
        newList.push(num + numbers[index]);
        newList.push(num - numbers[index]);
      }

      index++;
      queue.enqueue(newList);
    } else {
      for (let num of list) {
        if (num === target) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function solution(numbers, target) {
  // DFS
  let answer = dfs(0, numbers, target);

  // BFS
  // let answer = bfs(0, numbers, target);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
