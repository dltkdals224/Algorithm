# 2023.04.06
class Solution(object):
    def minCostClimbingStairs(self, cost):
        cost.append(0)
        memo = { 1:cost[0], 2:cost[1] }
        stairs_length = len(cost) + 1

        for idx in range(3, stairs_length):
            if memo[idx-1] <= memo[idx-2]:
                memo[idx] = memo[idx-1] + cost[idx-1]
            elif memo[idx-1] > memo[idx-2]:
                memo[idx] = memo[idx-2] + cost[idx-1]
        
        return memo[len(cost)]
        
sol = Solution()
sol.minCostClimbingStairs([10, 15, 20])
sol.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])