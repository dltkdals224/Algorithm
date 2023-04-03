from collections import deque

class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        shortest_path_length = -1
        row = len(grid)
        col = len(grid[0])

        if grid[0][0] != 0 or grid[row-1][col-1] != 0:
            return -1
        visited = [[False] * col for _ in range(row)]

        delta = [(1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)]
        queue = deque()
        queue.append((0,0,1))

        visited[0][0] = True

        while queue:
            cur_row, cur_col, cur_dis = queue.popleft()
            if cur_row == row - 1 and cur_col == col - 1:
                shortest_path_length = cur_dis
                break

            for delta_row, delta_col in delta:
                next_row = cur_row + delta_row
                next_col = cur_col + delta_col
                if row > next_row >= 0 and col > next_col >= 0:
                    if grid[next_row][next_col] == 0 and not visited[next_row][next_col]:
                        queue.append((next_row, next_col, cur_dis + 1))
                        visited[next_row][next_col] = True
    
        return shortest_path_length

sol = Solution()
sol.shortestPathBinaryMatrix([[0,1],[1,0]])  # 2
sol.shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])  # 4
sol.shortestPathBinaryMatrix([[0,1,1,1],[0,0,1,1],[0,1,1,1],[1,0,0,0]])  # 6
