# 2023.03.28
class Solution(object):
    def twoSum(self, nums, target):
        L_pointer = 0
        R_pointer = len(nums) - 1

        enumerated_nums = list(enumerate(nums))
        enumerated_nums = sorted(enumerated_nums,key = lambda x:x[1])

        while L_pointer != R_pointer:
            pointer_sum = enumerated_nums[L_pointer][1] + enumerated_nums[R_pointer][1]
            
            if(pointer_sum == target):
                return [enumerated_nums[L_pointer][0],enumerated_nums[R_pointer][0]]
            else:
                if(pointer_sum < target):
                    L_pointer += 1
                if(pointer_sum > target):
                    R_pointer -= 1
        

# sol = Solution()
# print(sol.twoSum([2,7,11,15],9))
# print(sol.twoSum([3,2,4],6))

## Two Pointer로 풀어야 Runtime 1등 가능