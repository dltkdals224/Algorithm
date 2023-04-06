# 2023.04.06
class Solution(object):
    def uniquePaths(self, m, n):
        field = [[1] * n for _ in range(m)]

        for row in range(m):
            for col in range(n):
                if row == 0 or col == 0:
                    continue
                else:
                    field[row][col] = field[row-1][col] + field[row][col-1]
        
        return field[-1][-1]

# sol = Solution()
# sol.uniquePaths(3, 7)
# sol.uniquePaths(3, 2)