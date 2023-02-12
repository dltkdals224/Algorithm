// 2023.02.12
class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert = (key, value) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  };

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

function solution(numbers) {
  var answer = [];
  const PRIORITY_QUEUE = new PriorityQueue();

  numbers.forEach((target, idx) => {
    while (!PRIORITY_QUEUE.isEmpty() && PRIORITY_QUEUE.heap[0].key < target) {
      answer[PRIORITY_QUEUE.dequeue().value] = target;
    }

    PRIORITY_QUEUE.enqueue(target, idx);
  });

  PRIORITY_QUEUE.heap.forEach((arr) => {
    answer[arr.value] = -1;
  });

  return answer;
}

// solution([2, 3, 3, 5]); // [3, 5, 5, -1]
// solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]
// solution([1, 10, 2, 9, 3, 8]); // [10, -1, 9, -1, 8, -1]
// solution([8, 1, 2, 9]); // [9, 2, 9, -1]
