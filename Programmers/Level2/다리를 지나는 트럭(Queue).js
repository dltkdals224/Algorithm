// 2022.10.02
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let targetTruckIndex = 0;

  const BRIDGE_STATUS = new Queue();

  while (1) {
    time++;

    // 다리에서 트럭 나옴
    if (
      time >=
      BRIDGE_STATUS.storage[BRIDGE_STATUS.front]?.time + bridge_length
    ) {
      BRIDGE_STATUS.popleft();
    }

    // 다리에 트럭 추가
    if (
      BRIDGE_STATUS.size() < bridge_length &&
      BRIDGE_STATUS.sum() + truck_weights[targetTruckIndex] <= weight
    ) {
      BRIDGE_STATUS.add({
        weight: truck_weights[targetTruckIndex],
        time: time,
      });
      targetTruckIndex++;
    } else {
    }

    // 트럭 모두 이동완료
    if (BRIDGE_STATUS.size() === 0) {
      break;
    }
  }

  return time;
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
      return this.rear - this.rear + 1;
    }
  }

  // 인자 합
  sum() {
    let sum = 0;
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      for (let i = this.front; i <= this.rear; i++) {
        sum += this.storage[i].weight;
      }
      return sum;
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
