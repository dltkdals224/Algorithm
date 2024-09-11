from collections import deque

class Solution(object):
    def maxAreaOfIsland(self, grid):
        max_area = 0
        row = len(grid)
        col = len(grid[0])

        visited = [[False] * col for _ in range(row)]
        
        def bfs(grid, r, c):
            directions = ((-1,0),(1,0),(0,-1),(0,1))
            
            visited[r][c] = True
            queue = deque()
            queue.append((r,c))

            tmp = 0
            while queue:
                cur_r, cur_c = queue.popleft()

                if grid[cur_r][cur_c] == 0:
                    continue
                else:
                    for dr, dc in directions:
                        next_r, next_c = cur_r + dr, cur_c + dc
                        if 0 <= next_r < row and 0 <= next_c < col:
                            if grid[next_r][next_c] == 1 and not visited[next_r][next_c]:
                                visited[next_r][next_c] = True
                                queue.append((next_r, next_c))
                                tmp += 1
            
            print(tmp)

        for r in range(row):
            for c in range(col):
                bfs(grid, r, c)

        print(visited, max_area)

sol = Solution()
sol.maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])  # 6
