# 2023.04.06
from collections import deque

def solution(maps):
    answer = []

    row = len(maps)
    col = len(maps[0])
    visited = [[False] * col for _ in range(row)]

    def bfs(x, y):
        dx = [-1,1,0,0]
        dy = [0,0,-1,1]

        visited[x][y] = True

        queue = deque()
        queue.append((x,y))

        sum_of_supply = int(maps[x][y])

        while queue:
            cur_x, cur_y = queue.popleft()

            for i in range(4):
                next_x = cur_x + dx[i]
                next_y = cur_y + dy[i]
                if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
                    if maps[next_x][next_y] != 'X' and not visited[next_x][next_y]:
                        visited[next_x][next_y] = True
                        sum_of_supply += int(maps[next_x][next_y])
                        queue.append((next_x,next_y))
        
        answer.append(sum_of_supply)
                            
    for i in range(row):
        for j in range(col):
            if maps[i][j] != 'X' and not visited[i][j]:
                bfs(i, j)

    return sorted(answer) if answer != [] else [-1]

# solution(["X591X","X1X5X","X231X", "1XXX1"])  # [1,1,27]
