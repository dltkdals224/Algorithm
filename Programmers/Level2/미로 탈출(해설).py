from collections import deque

def solution(maps):
    answer = 0
    row = len(maps)
    col = len(maps[0])
    
    def calc_time(maps, start, target):
        start_r, start_c = start
        visited = set()

        ###
        directions = ((-1,0),(1,0),(0,-1),(0,1))
        queue = deque()
        queue.append((start_r, start_c, 0))
        ###
        
        while queue:
            cur_r, cur_c, distance = queue.popleft()
            
            if (cur_r, cur_c) in visited:
                continue
            else:
                visited.add((cur_r, cur_c))

                ### cur_r, cur_c로 maps를 탐색하여 진행할 수 없는지 확인
                if maps[cur_r][cur_c] == 'X':
                    continue
                elif (cur_r,cur_c) == target:
                    return distance
                ###
                else:

                    ### directions에 대한 모든 순회 후 queue에 삽입.
                    for dr, dc in directions:
                        next_r, next_c = cur_r + dr, cur_c + dc
                        if 0 <= next_r < row and 0 <= next_c < col:
                            queue.append((next_r, next_c, distance+1))
                    ###
        
        ### 더이상 진행할 수 없음에 대한 return은 마지막에 처리.
        return -1 
        ###
            
    
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