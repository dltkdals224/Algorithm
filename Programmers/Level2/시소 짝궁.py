# 2023.04.13
from collections import defaultdict
import math

def solution(weights):
    answer = 0
    dic = defaultdict(int)

    for weight in weights:
        dic[weight] += 1
    
    for weight in list(dic):
        if dic[weight] != 1:
            answer += math.comb(dic[weight],2)
        
        if dic[weight * 3/2]:
            answer += dic[weight] * dic[weight * 3/2]
        if dic[weight * 2]:
            answer += dic[weight] * dic[weight * 2]
        if dic[weight * 4/3]:
            answer += dic[weight] * dic[weight * 4/3]
    
    return answer

# solution([100,180,360,100,270])  # 4
# solution([100,100,100])  # 3
# solution([100,100,200,200])  # 6
