// Definition for a binary tree node.
// 구성 및 동작 방식이 궁금해서 작성.

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function createTree(arr) {
  if (arr.length === 0) return null;
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

  // console.log(root);
  return root;
}

function createTree2(arr) {
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  //   console.log(root);
  return root;
}

// createTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]);
// createTree2([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]);
// 두 경우 모두 동일하게 동작.
