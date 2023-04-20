# 2023.04.20
class Solution(object):
    def minOperations(self, boxes):
        ans = []
        
        ball_idx = []
        for idx, value in enumerate(boxes):
            if value == '1':
                ball_idx.append(idx)
            
        for idx, value in enumerate(boxes):
            tmp = 0
            for target_idx in ball_idx:
                tmp += abs(target_idx - idx)
            ans.append(tmp)

        return ans

# sol = Solution()
# sol.minOperations("110")  # [1, 1, 3]
# sol.minOperations("001011")  # [11,8,5,4,3,4]