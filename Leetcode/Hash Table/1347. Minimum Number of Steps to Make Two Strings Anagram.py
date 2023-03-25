# 2023.03.25
from collections import defaultdict

class Solution(object):
    def minSteps(self, s, t):
        ans = 0
        dic_s = defaultdict(int)
        dic_t = defaultdict(int)

        for string in s:
            dic_s[string] += 1
        for string in t:
            dic_t[string] += 1

        for target in dic_t:
            target_dif = dic_t[target] - dic_s[target]
            if(target_dif > 0):
                ans += target_dif
        
        return ans