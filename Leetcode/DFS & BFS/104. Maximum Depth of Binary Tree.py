# 2023.03.31

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

## by BFS
# level별 전개를 통해 최고 깊이의 depth를 갱신
from collections import deque

class Solution(object):
    def maxDepth(self, root):
        if root is None:
            return 0

        depth = 1
        queue = deque()

        queue.append((root,depth))

        while queue:
            cur_node,cur_depth = queue.popleft()
            
            if depth < cur_depth:
                depth = cur_depth

            if cur_node.left:
                queue.append((cur_node.left,cur_depth+1))
            if cur_node.right:
                queue.append((cur_node.right,cur_depth+1))
        
        return depth

## by DFS
# return을 통해 depth를 끌어올림
class Solution2(object):
    def maxDepth(self, root):
        ans = self.dfs(root)
        return ans
        
    def dfs(self, cur_node):
        if cur_node is None:
            return 0

        left_depth = self.dfs(cur_node.left)
        right_depth = self.dfs(cur_node.right)

        return max(left_depth,right_depth) + 1
        
        