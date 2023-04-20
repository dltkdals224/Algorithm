# 2023.04.20
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxAncestorDiff(self, root):
        global ans
        ans = 0

        def dfs_max (cur_node, max_value):
            global ans
            if cur_node is None:
                return

            if ans < abs(cur_node.val - max_value):
                ans = abs(cur_node.val - max_value)
            
            if cur_node.val >= max_value:
                intermediate_value = cur_node.val
            else:
                intermediate_value = max_value
                
            dfs_max(cur_node.left,intermediate_value)
            dfs_max(cur_node.right,intermediate_value)

        ans = 0
        
        def dfs_min (cur_node, min_value):
            global ans
            if cur_node is None:
                return

            if ans < abs(cur_node.val - min_value):
                ans = abs(cur_node.val - min_value)
            
            if cur_node.val <= min_value:
                intermediate_value = cur_node.val
            else:
                intermediate_value = min_value
                
            dfs_min(cur_node.left,intermediate_value)
            dfs_min(cur_node.right,intermediate_value)

        dfs_max(root, root.val)
        dfs_min(root, root.val)

        return ans
        