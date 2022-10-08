const solution = () => {
  const testQueue = new Queue();

  testQueue.add("A");
  testQueue.add("B");
  testQueue.add("C");

  console.log(testQueue);
  console.log(testQueue.getFront());

  testQueue.popleft();
  console.log(testQueue);
  console.log(testQueue.getFront());
  console.log(testQueue.getQueue());
};

// target의 순회 수가 1000 이하라면 그냥 '배열 + shift()'로 queue만들어 사용하는게 유리
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

  // head를 반환하는 함수
  getFront() {
    return this.rear !== 0 && this.storage[this.front];
  }

  // 큐의 모든 원소를 배열로 반환
  getQueue() {
    if (!this.storage) {
      return false;
    }

    const array = [];
    for (let i = this.front; i <= this.rear; i++) {
      array.push(this.storage[i]);
    }

    return array;
  }
}

solution();
