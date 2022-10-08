// 2022.09.21
function solution(priorities, location) {
  let TargetPrintOrder = 1;

  while (priorities.length !== 0) {
    if (priorities[0] === Math.max(...priorities)) {
      // 출력
      if (location === 0) {
        return TargetPrintOrder;
      } else {
        priorities.shift();
        TargetPrintOrder++;

        location--;
      }
    } else {
      // 미출력
      if (location === 0) {
        priorities.push(priorities[0]);
        priorities.shift();

        location = priorities.length - 1;
      } else {
        priorities.push(priorities[0]);
        priorities.shift();

        location--;
      }
    }
  }
}

// 대기목록이 100 이하라 shift()연산 쓰는게 속도 더 빠름.

// function solution(priorities, location) {
//   let TargetPrintOrder = 1;

//   const printQueue = new Queue();
//   for (let i = 0; i < priorities.length; i++) {
//     printQueue.add(priorities[i]);
//   }

//   while (printQueue.size() !== 0) {
//     if (
//       printQueue.storage[printQueue.front] ===
//       Math.max(...printQueue.getQueue())
//     ) {
//       // 뭐가됐든 출력
//       if (location === 0) {
//         return TargetPrintOrder;
//       } else {
//         printQueue.popleft();

//         TargetPrintOrder++;
//         location--;
//       }
//     } else {
//       // 뭐가됐든 미출력 (순서 밀림)
//       if (location === 0) {
//         printQueue.add(printQueue.storage[printQueue.front]);
//         printQueue.popleft();

//         location = printQueue.size() - 1;
//       } else {
//         printQueue.add(printQueue.storage[printQueue.front]);
//         printQueue.popleft();

//         location--;
//       }
//     }
//   }
// }

// class Queue {
//   // 큐 초기화
//   constructor() {
//     this.storage = {};
//     this.front = 0;
//     this.rear = 0;
//   }

//   // 크기
//   size() {
//     if (this.storage[this.rear] === undefined) {
//       return 0;
//     } else {
//       return this.rear - this.front + 1;
//     }
//   }

//   // 데이터 삽입
//   add(value) {
//     if (this.size() === 0) {
//       this.storage["0"] = value;
//     } else {
//       this.rear += 1;
//       this.storage[this.rear] = value;
//     }
//   }

//   // 데이터 추출
//   popleft() {
//     let tmp;
//     if (this.front == this.rear) {
//       tmp = this.storage[this.front];
//       delete this.storage[this.front];
//       this.front = 0;
//       this.rear = 0;
//     } else {
//       tmp = this.storage[this.front];
//       delete this.storage[this.front];
//       this.front += 1;
//     }
//     return tmp;
//   }

//   // head를 반환하는 함수
//   getFront() {
//     return this.rear !== 0 && this.storage[this.front];
//   }

//   // 큐의 모든 원소를 배열로 반환
//   getQueue() {
//     if (!this.storage) {
//       return false;
//     }

//     const array = [];
//     for (let i = this.front; i <= this.rear; i++) {
//       array.push(this.storage[i]);
//     }

//     return array;
//   }
// }

//

// 다른사람의 풀이

// 객체로 location을 관리 ( 적절한 방식인 듯 )
// function solution(priorities, location) {
//     var list = priorities.map((t,i)=>({
//         my : i === location,
//         val : t
//     }));
//     var count = 0;
//     while(true){
//         var cur = list.splice(0,1)[0];
//         if(list.some(t=> t.val > cur.val )){
//             list.push(cur);
//         }
//         else{
//             count++;
//             if(cur.my) return count;
//         }
//     }
// }
