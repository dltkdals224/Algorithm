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

# 일단 이게 이해 더 잘 되긴 할 듯
class Solution2:
    def lcaDeepestLeaves(self, root):
        def dfs(node = root, depth = 0):
            if not node:
                return depth-1
            
            l = dfs(node.left, depth + 1)
            r = dfs(node.right, depth + 1)

            if l == r:
                d[l] = node
                
            return max(l,r)
        
        d = {}
        return d[dfs()]