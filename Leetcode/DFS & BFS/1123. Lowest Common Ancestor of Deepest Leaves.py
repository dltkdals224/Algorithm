# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def ht(self, node):
        if not node:
            return 0
        return max(self.ht(node.left), self.ht(node.right)) + 1
    
    def dfs(self, node):
        if not node:
            return None
        left, right = self.ht(node.left), self.ht(node.right)
        if left == right:
            return node
        if left > right:
            return self.dfs(node.left)
        if left < right:
            return self.dfs(node.right)

    def lcaDeepestLeaves(self, root):
        return self.dfs(root)
