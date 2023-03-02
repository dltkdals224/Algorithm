// 2023.03.03
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
var sumEvenGrandparent = function (root) {
  const QUEUE = [root];
  let ans = 0;
  let qlen, curr;

  while (QUEUE.length) {
    qlen = QUEUE.length;

    for (let i = 0; i < qlen; i++) {
      curr = QUEUE.shift();

      if (curr.val % 2 === 0) {
        if (curr.left) {
          if (curr.left.left) {
            ans += curr.left.left.val;
          }
          if (curr.left.right) {
            ans += curr.left.right.val;
          }
        }
        if (curr.right) {
          if (curr.right.left) {
            ans += curr.right.left.val;
          }
          if (curr.right.right) {
            ans += curr.right.right.val;
          }
        }
      }

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

// [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5];
// 18
