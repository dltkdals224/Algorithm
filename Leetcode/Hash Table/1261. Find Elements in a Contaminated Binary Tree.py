# 2023.03.27
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class FindElements(object):

    def __init__(self, root):
        self.dic = {}

        root.val = 0
        self.dic[0] = True

        self.recover(root)

    def recover(self, tree):
        parent_val = tree.val
        if(tree.left != None):
            self.dic[parent_val * 2 + 1] = True
            tree.left.val = parent_val * 2 + 1
            self.recover(tree.left)
        
        if(tree.right != None):
            self.dic[parent_val * 2 + 2] = True
            tree.right.val = parent_val * 2 + 2
            self.recover(tree.right)

    def find(self, target):
        return True if target in self.dic else False

# Your FindElements object will be instantiated and called as such:
# obj = FindElements(root)
# param_1 = obj.find(target)