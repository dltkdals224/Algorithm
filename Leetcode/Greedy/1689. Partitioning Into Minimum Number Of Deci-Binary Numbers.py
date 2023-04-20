# 2023.04.20
class Solution(object):
    def minPartitions(self, n):
        ans = 0

        for target in n :
            if int(target) > ans:
                ans = int(target)
        
        return ans

# sol = Solution()
# sol. minPartitions('27346209830709182346')  # 9