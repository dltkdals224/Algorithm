// 2023.03.5
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
var averageOfSubtree = function (root) {
  let ans = 0;

  (function dfs(root) {
    if (root.val === calcAverage(root)) {
      ans++;
    }

    if (root.left) {
      dfs(root.left);
    }
    if (root.right) {
      dfs(root.right);
    }
  })(root);

  return ans;
};

const calcAverage = (root) => {
  if (!root) return;
  let sum = 0;
  let count = 0;

  (function dfs(root) {
    sum += root.val;
    count++;

    if (root.left) {
      dfs(root.left);
    }
    if (root.right) {
      dfs(root.right);
    }
  })(root);

  return Math.floor(sum / count);
};
