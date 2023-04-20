# 2023.04.20
class Solution(object):
    def minPairSum(self, nums):
        arr = []
        length = len(nums)

        nums.sort()

        for idx, value in enumerate(nums):
            if idx >= length // 2:
                break
            arr.append(value + nums[length -1 -idx])

        return max(arr)

# sol = Solution()
# sol.minPairSum([3,5,4,2,4,6])  # 8