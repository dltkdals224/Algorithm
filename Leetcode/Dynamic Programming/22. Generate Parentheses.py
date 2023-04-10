# 2023.04.10
class Solution(object):
    def generateParenthesis(self, n):
        ans = []
        dp = { "()":-1 }
        
        for stage in range(n-1):
            for parenthesis in list(dp):
                idx = 0
                while parenthesis[idx] != ')':
                    dp[parenthesis[:idx] + "()" + parenthesis[idx:]] = -1
                    idx += 1
                dp[parenthesis[:idx] + "()" + parenthesis[idx:]] = -1
            
        for target in dp:
            if len(target) == n * 2:
                ans.append(target)
            
        return ans

# sol = Solution()
# sol.generateParenthesis(1) # ["()"]
# sol.generateParenthesis(2) # ["(())","()()"]
# sol.generateParenthesis(3) # ["((()))","(()())","(())()","()(())","()()()"]