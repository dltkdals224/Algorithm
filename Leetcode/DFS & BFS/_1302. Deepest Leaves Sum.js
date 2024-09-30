// 2023.03.02
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  const QUEUE = [root];
  let ans, qlen, curr;

  while (QUEUE.length) {
    ans = 0;
    qlen = QUEUE.length;

    // 반복문 두 개를 통해 QUEUE에 값을 채워나가며 BFS로 전개.
    // ...1
    for (let i = 0; i < qlen; i++) {
      curr = QUEUE.shift();
      ans += curr.val;

      if (curr.left) {
        QUEUE.push(curr.left);
      }
      if (curr.right) {
        QUEUE.push(curr.right);
      }
    }
  }
  return ans;
};

// [1,2,3,4,5,null,6,7,null,null,null,null,8]
// 15

// ...1 부분에서 console.log(QUEUE)를 찍으면 다음과 같은 출력을 볼 수 있다.
// [ [1,2,3,4,5,null,6,7,null,null,null,null,8] ]
// [ [2,4,5,7], [3,null,6,null,8] ]
// [ [4,7], [5], [6,null,8] ]
// [ [7], [8] ]
