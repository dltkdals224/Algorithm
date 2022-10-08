// 단방향 링크드리스트 보다 특정 Node에 대한 접근이 빠르다.
// 노드별로 이전과 다음 부분을 모두 고려하기 때문에 메모리 저장공간이 더 필요하다.
const solution = () => {
  const linkedList = new LinkedList();
  linkedList.insert("Seoul", "head"); //head->Seoul
  linkedList.insert("Busan", "Seoul"); //head->Seoul->Busan
  linkedList.insert("Daegu", "Seoul"); //head->Seoul->Daegu->Busan
  linkedList.insert("Incheon", "Busan"); //head->Seoul->Daegu->Busan->Incheon
  linkedList.remove("Busan"); //head->Seoul->Daegu->Incheon
};

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    if (current.next == null) {
      newNode.next = null;
      newNode.prev = current;
      current.next = newNode;
    } else {
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }
  }

  remove(item) {
    let currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      currNode.next = null;
      currNode.prev = null;
    }
  }
}

solution();
