# 2023.04.09
from itertools import chain

class Solution:
    def countSquares(self, matrix):
        dp_table = [ list(row) for row in matrix ]
        row = len(matrix)
        col = len(matrix[0])
        
        # 문제풀이 핵심
        for r in range(row-2, -1, -1):
            for c in range(col-2, -1, -1):
                # print(r,c)
                if matrix[r][c]:
                    dp_table[r][c] = 1 + min(dp_table[r+1][c+1],dp_table[r+1][c],dp_table[r][c+1])

        # iterable 합 연산. 이 부분은 그렇게 중요한게 아님.
        return sum(chain(*dp_table))


# 시간초과 발생 29/32 ㅜㅜ
# class Solution(object):
#     def countSquares(self, matrix):
#         ans = 0
#         dic = {}

#         row = len(matrix)
#         col = len(matrix[0])
#         max_side_length = min(row, col)

#         for x in range(row):
#             for y in range(col):
#                 if matrix[x][y] == 1:
#                     dic[(x,y)] = 1
#         ans += len(dic)
        
#         for a in range(1,max_side_length+1):
#             dic_copy = dic.copy()
#             for i in dic_copy:
#                 x,y = i
#                 side = dic_copy[i]

#                 if x < row-1 and y < col-1:
#                     if (x,y+1) in dic_copy and (x+1,y) in dic_copy and (x+1,y+1) in dic_copy:
#                         if dic_copy[(x,y+1)] == side and dic_copy[(x+1,y)] == side and dic_copy[(x+1,y+1)] == side:
#                             ans += 1
#                             dic[(x,y)] = side + 1

#         return ans


sol = Solution()
sol.countSquares([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
])
sol.countSquares([
  [1,0,1],
  [1,1,0],
  [1,1,0]
])