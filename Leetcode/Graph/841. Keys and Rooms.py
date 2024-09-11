# 2023.04.03
class Solution(object):
    def canVisitAllRooms(self, rooms):
        visited = [0]
        total_rooms = [i for i in range(len(rooms))]

        def dfs(cur_v):
            for v in rooms[cur_v]:
                if v not in visited:
                    visited.append(v)
                    dfs(v)
        dfs(0)

        return True if len(visited) == len(total_rooms) else False

## 다른 풀이 (by BFS)
from collections import deque

class Solution2(object):
    def canVisitAllRooms(self, rooms):
        visited = [False] * len(rooms)

        def bfs(v):
            queue = deque()
            queue.append(v)
            visited[v] = True
            while queue:
                cur_v = queue.popleft()
                for next_v in rooms[cur_v]:
                    if visited[next_v] == False:
                        queue.append(next_v)
                        visited[next_v] = True
        bfs(0)

        return all(visited)

# sol = Solution2()
# sol.canVisitAllRooms([[1],[2],[3],[]])
# sol.canVisitAllRooms([[1,3],[3,0,1],[2],[0]])