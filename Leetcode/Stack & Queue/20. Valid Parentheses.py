# 2023.03.30
class Solution(object):
    def isValid(self, s):
        open_parentheses_type = ['(','{','[']
        stack = []
        
        for target in s:
            if target in open_parentheses_type:
                stack.append(target)
            else:
                if len(stack) == 0:
                    return False

                stack_target = stack.pop()
                if target == ')' and stack_target == '(':
                    continue
                elif target == '}' and stack_target == '{':
                    continue
                elif target == ']' and stack_target == '[':
                    continue
                else:
                    return False

        return True if len(stack) == 0 else False