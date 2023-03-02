// Definition for a binary tree node.
// 구성 및 동작 방식.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function createTree(arr) {
  if (arr.length === 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    const parent = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) {
      const leftChild = new TreeNode(arr[i]);
      parent.left = leftChild;
      queue.push(leftChild);
    }
    if (i + 1 < arr.length && arr[i + 1] !== null && arr[i + 1] !== undefined) {
      const rightChild = new TreeNode(arr[i + 1]);
      parent.right = rightChild;
      queue.push(rightChild);
    }
  }

  return root;
}

const NODE = createTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]);
console.log(NODE);
console.log(NODE.left);
console.log(NODE.right);
