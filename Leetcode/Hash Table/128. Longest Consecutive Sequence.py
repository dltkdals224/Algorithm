# 2023.03.30
class Solution(object):
    def longestConsecutive(self, nums):
        ans = 0
        dic = {}

        # O(n)
        for num in nums:
            dic[num] = True
        
        # O(n)
        # dic 대신 dic.keys()써서 순회하면 시간 초과 발생.
        # 시간복잡도가 중요한 문제에서는 dic.keys(), dic.values(), dic.items()의 사용에도 주의
        for num in dic:
            if num - 1 not in dic:
                tmp = 1
                target = num + 1
                while target in dic:
                    target += 1
                    tmp += 1

                if tmp > ans:
                    ans = tmp

        return ans

# sol = Solution()
# sol.longestConsecutive([100,4,200,1,3,2])  # 4
# sol.longestConsecutive([0,3,7,2,5,8,4,6,0,1])  # 9
# sol.longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])  # 7
# sol.longestConsecutive([0,-1])  # 2
# sol.longestConsecutive([0])  # 1
# sol.longestConsecutive([])  # 0
# sol.longestConsecutive([0,1])  # 2
# sol.longestConsecutive([0,0])  # 1