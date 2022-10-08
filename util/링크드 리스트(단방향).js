// 배열과 비교했을 때의 linked list의 장점은 데이터의 삽입과 삭제에 있다.
// splice의 시간복잡도가 O(n)인 반면, linked list의 insert와 remove는 시간복잡도가 O(1)이다.
const solution = () => {
  let linkedList = new LinkedList();
  linkedList.insert("A", "head");
  linkedList.insert("B", "A");
  linkedList.insert("AA", "head");
  linkedList.insert("C", "B");
  console.log(linkedList.toString());

  linkedList.remove("A");

  console.log(linkedList.toString());
};

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  // 맨 뒤 노드에 추가및 잇기
  // O(n)
  append(newElement) {
    let newNode = new Node(newElement); //새로운 노드 생성
    let current = this.head; // 시작 노드
    while (current.next != null) {
      // 맨 끝 노드 찾기
      current = current.next;
    }
    current.next = newNode;
  }

  // O(1)
  insert(newElement, item) {
    let newNode = new Node(newElement); //새로운 노드 생성
    let current = this.find(item); // 삽입할 위치의 노드 찾기
    newNode.next = current.next; // 찾은 노드가 가리키는 노드를 새로은 노드가 가리키기
    current.next = newNode; // 찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
  }

  remove(item) {
    let preNode = this.findPrevious(item); // 삭제할 노드를 가리키는 노드 찾기
    preNode.next = preNode.next.next; // 삭제할 노드 다음 노드를 가리키도록 하기
  }

  // 해당하는 item이 담긴 node를 return
  // O(n)
  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // item보다 하나 전의 node를 return
  // O(n)
  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next != null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 배열 꼴로 return
  toString() {
    let array = [];
    let currNode = this.head;
    while (currNode.next !== null) {
      array.push(currNode.next.element);
      currNode = currNode.next;
    }
    return array;
  }
}

solution();
