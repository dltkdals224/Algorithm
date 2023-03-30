# 2023.03.30
from collections import deque

class Solution(object):
    def dailyTemperatures(self, temperatures):
        ans = [0] * len(temperatures) # 의외로 이 부분이 문제 풀이의 핵심.
        stack = []
        
        for cur_day, cur_temp in enumerate(temperatures):
            while stack and stack[len(stack) - 1][1] < cur_temp:
                prev_day, _ = stack.pop()
                ans[prev_day] = cur_day - prev_day
            stack.append((cur_day, cur_temp))

        return ans
        
# sol = Solution()
# sol.dailyTemperatures([73,74,75,71,69,72,76,73])