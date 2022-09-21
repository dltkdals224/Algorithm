function solution(priorities, location) {
  let TargetPrintOrder = 1;

  while (priorities.length !== 0) {
    if (priorities[0] === Math.max(...priorities)) {
      // 출력
      if (location === 0) {
        // target 검사
        return TargetPrintOrder;
      } else {
        // 그 외
        priorities.shift();
        TargetPrintOrder++;

        location--;
      }
    } else {
      // 미출력
      if (location === 0) {
        // target 검사
        priorities.push(priorities[0]);
        priorities.shift();

        location = priorities.length - 1;
      } else {
        // 그 외
        priorities.push(priorities[0]);
        priorities.shift();

        location--;
      }
    }
  }
}

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
