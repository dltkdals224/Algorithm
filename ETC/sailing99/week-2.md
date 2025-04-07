### 문제 

DAY 06  
⚠️ [섬의 개수](https://www.acmicpc.net/problem/4963)

반복 이해: 🟢  
반복 풀이: 🔵

### 풀이

```python
import sys
sys.setrecursionlimit(10000)

def dfs(x, y):
    directions = [(-1, -1), (-1, 0), (-1, 1),
                  (0, -1),          (0, 1),
                  (1, -1),  (1, 0), (1, 1)]  # !
    
    visited[x][y] = True 

    for dx, dy in directions:
        nx, ny = x + dx, y + dy
        if 0 <= nx < h and 0 <= ny < w:
            if grid[nx][ny] == 1 and not visited[nx][ny]:
                dfs(nx, ny)

while True:
    w, h = map(int, sys.stdin.readline().split())
    if w == 0 and h == 0:
        break

    grid = []
    for _ in range(h):
        row = list(map(int, sys.stdin.readline().split()))
        grid.append(row[:w])
    
    visited = [[False] * w for _ in range(h)]
    count = 0

    for i in range(h):
        for j in range(w):
            if grid[i][j] == 1 and not visited[i][j]:
                dfs(i, j)
                count += 1

    print(count)
```

<br/>

> AI

```python
import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

while True:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break
    grid = [list(map(int, input().split())) for _ in range(h)]
    ans = 0

    def dfs(x, y):
        grid[x][y] = 0
        for dx, dy in [(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < h and 0 <= ny < w and grid[nx][ny]:
                dfs(nx, ny)

    for i in range(h):
        for j in range(w):
            if grid[i][j]:
                ans += 1
                dfs(i, j)
    print(ans)
```

<br/>

### 문제 

DAY 07  

<!-- 반복 이해: 🟢   -->

### 풀이