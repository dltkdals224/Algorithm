# 2023.04.20
from collections import defaultdict

class Solution(object):
    def findDuplicates(self, nums):
        ans = []
        dic = defaultdict(int)
        
        for target in  nums:
            if target in dic:
                ans.append(target)
            else:
                dic[target] += 1

        return ans
    
# sol = Solution()
# sol.findDuplicates([1,1,2,3,3])