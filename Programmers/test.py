from collections import deque

def solution(maps):
    answer = 0
    row = len(maps)
    col = len(maps[0])
    
    def calc_time(maps, start, target):
        directions = ((-1,0),(1,0),(0,-1),(0,1))
        start_r, start_c = start
        
        visited = set()
        queue = deque()
        queue.append([start_r, start_c, 0])
        
        while queue:
            cur_r, cur_c, distance = queue.popleft()
            
            if (cur_r, cur_c) in visited:
                continue
            else:
                visited.add((cur_r, cur_c))
                if maps[cur_r][cur_c] == 'X':
                    continue
                elif (cur_r,cur_c) == target:
                    return distance
                else:
                    for dr, dc in directions:
                        next_r, next_c = cur_r + dr, cur_c + dc
                        if 0 <= next_r < row and 0 <= next_c < col:
                            queue.append((next_r, next_c, distance+1))
            
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
        
            
    time_1 = calc_time(maps, start_idx, lever_idx)
    time_2 = calc_time(maps, lever_idx, end_idx)

    print(time_1 , time_2)

    return answer

solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"])  # 16
solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"])  # -1