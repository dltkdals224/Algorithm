# 2023.04.13
from collections import deque

def solution(maps):
    row = len(maps)
    col = len(maps[0])
    
    def get_cnt(maps, start, end):
        directions = ((0,-1),(0,1),(-1,0),(1,0))
        start_r, start_c = start

        visited = set()
        queue = deque()
        queue.append([start_r, start_c, 0])
        
        while queue:
            cur_r, cur_c, cnt = queue.popleft()
            if (cur_r, cur_c) in visited:
                continue
            else:
                visited.add((cur_r, cur_c))
                if maps[cur_r][cur_c] == 'X':
                    continue
                elif (cur_r, cur_c) == end:
                    return cnt
                else:
                    for dx,dy in directions:
                        next_r, next_c = cur_r + dx, cur_c + dy
                        if 0 <= next_r < row and 0 <= next_c < col:
                            queue.append((next_r, next_c, cnt+1))

        return -1
    
    start_idx = []
    lever_idx = []
    end_idx = []
    for r in range(row):
        for c in range(col):
            if maps[r][c] == 'S':
                start_idx = (r,c)
            if maps[r][c] == 'L':
                lever_idx = (r,c)
            if maps[r][c] == 'E':
                end_idx = (r,c)

    move_1 = get_cnt(maps, start_idx, lever_idx)
    move_2 = get_cnt(maps, lever_idx, end_idx)

    if move_1 == -1 or move_2 == -1:
        return -1
    else:
        return move_1 + move_2
    

# solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"])  # 16
# solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"])  # -1