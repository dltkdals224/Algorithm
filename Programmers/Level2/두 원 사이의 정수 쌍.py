def solution(r1, r2):
    dp = { 1: 1 }
    
    for i in range(2,(max(r1, r2))+1):
        dp[i] = dp[i-1] + (2*i-1) * 4
    
    print(dp)
        
    answer = 0
    return answer

solution(2, 3)  # 20