# 2023.04.03
from collections import deque

class Solution(object):
    def numIslands(self, grid):
        number_of_islands = 0
        row = len(grid)
        col = len(grid[0])
        visited = [[False]*col for _ in range(row)]

        # 메모리 낭비 막기 위해 bfs를 numIslands내부에 선언.
        def bfs(x, y):
            # 동서남북 방문에 사용되는 dx,dy (대각선도 연결해야 한다면 이 부분에서 수정)
            dx = [-1, 1, 0, 0]
            dy = [0, 0, -1, 1]

            visited[x][y] = True
            queue = deque()
            queue.append((x,y))
            while queue:
                cur_x, cur_y = queue.popleft()
                for i in range(4):
                    next_x = cur_x + dx[i]
                    next_y = cur_y + dy[i]
                    if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
                        if grid[next_x][next_y] == '1' and not visited[next_x][next_y]:
                            visited[next_x][next_y] = True
                            queue.append((next_x,next_y))            
        
        for x in range(row):
            for y in range(col):
                if grid[x][y] == '1' and not visited[x][y]:
                    bfs(x, y)
                    number_of_islands += 1
        
        print(number_of_islands)
        return number_of_islands

## 정리
# 대놓고 자료구조 묻는 문제.
# 암시적 그래프(2차원 행렬로 지도를 표현)에 대한 풀이의 정석.

## 풀이
# 모든 vertex에 대해 BFS를 시전하라는 명령을 삽입.
# 이미 처리된 vertext에 대해서는 동작하지 않도록 함.
    
# sol = Solution()
# sol.numIslands([
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ])  # 1

# sol.numIslands([
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ])  # 3