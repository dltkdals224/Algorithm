# 2023.04.20
from collections import defaultdict

class Solution(object):
    def findWinners(self, matches):
        not_lose = []
        one_lose = []

        loser_dic = defaultdict(int)
        
        for winner, loser in matches:
            if winner not in loser_dic:
                loser_dic[winner] = 0
            loser_dic[loser] += 1
                    
        for key, value in loser_dic.items():
            if value == 0:
                not_lose.append(key)
            if value == 1:
                one_lose.append(key)
            
        return [sorted(not_lose),sorted(one_lose)]

# sol = Solution()
# sol.findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])  # [[1,2,10],[4,5,7,8]]
