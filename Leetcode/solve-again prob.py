# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def dfs(self, node, depth):
        if node == None:
            return (node, depth)
        
        l = self.dfs(node.left, depth+1)
        r = self.dfs(node.right, depth+1)
        print(l, r)

    def lcaDeepestLeaves(self, root):
        return self.dfs(root, 1)
