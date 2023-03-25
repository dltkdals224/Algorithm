# 2023.03.25
class Solution(object):
    def countDistinctIntegers(self, nums):
        ans_arr = nums[:]

        for target in nums:
            reversed_target = int(str(target)[::-1])
            ans_arr.append(reversed_target)
        
        ans_arr = list(set(ans_arr))
        return len(ans_arr)