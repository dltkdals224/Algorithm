# 2023.04.20
class Solution(object):
    def maxIncreaseKeepingSkyline(self, grid):
        ans = 0
        rows = len(grid)
        cols = len(grid[0])

        new_grid = [[0] * rows for _ in range(cols)]
    
        for r in range(rows):
            for c in range(cols):
                new_col = r
                new_row = cols - c - 1
                new_grid[new_row][new_col] = grid[r][c]

        for r in range(rows):
            for c in range(cols):
                ans += min(max(grid[r]), max(new_grid[cols-c-1])) - grid[r][c]

        return ans

# sol = Solution()
# sol.maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])  # 35