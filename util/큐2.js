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
