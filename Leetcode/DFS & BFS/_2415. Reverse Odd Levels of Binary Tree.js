// 2023.03.06
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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  let queue = [root];
  let level = 0;

  // qlen을 따로 안만드는 이 구조가 더 나은 듯?
  while (queue.length) {
    const next = [];

    // odd level 연산
    if (level % 2) {
      for (let i = 0, j = queue.length - 1; i < j; i++, j--) {
        const temp = queue[i].val;
        queue[i].val = queue[j].val;
        queue[j].val = temp;
      }
    }

    // 단순 queue 전개
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }

    queue = next;
    level++;
  }

  return root;
};
