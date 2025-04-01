### 문제

DAY 01  
[소수 구하기 (#1929)](https://www.acmicpc.net/problem/1929)

### 풀이

> 아이디어

**에라토스테네스의 체**를 사용한다.  
(고대 그리스 수학자 에라토스테네스가 만든 소수를 찾는 방법)

임의의 자연수 n에 대해 **그 이하의 소수를 모두 찾는**, 가장 간단하고 빠른 방법.  
'주어진 수 하나가 소수인가?'를 따지는 상황이라면 다른 방법이 더 빠르다.

```python
M, N = map(int, input().split())
sieve = [True] * (N+1) # !
sieve[0] = sieve[1] = False 

for i in range(2, int(N**0.5)+1): # !
    if sieve[i]:
        for j in range(i*i, N+1, i): # !
            sieve[j] = False

for i in range(M, N+1):
    if sieve[i]:
        print(i)
```

### 설명

n이하의 소수를 모두 찾고 싶다면 1부터 n까지 쭉 나열한 다음에 2의 배수, 3의 배수, 5의 배수...로 제거해 나가는 것.


<br/>

### 문제 

DAY 02  
[피보나치 비스무리한 수열](https://www.acmicpc.net/problem/14495)

### 풀이

> 아이디어

MAX_LENGTH가 얼마되지 않아서 그냥 모두 구해버린 후 출력하는 풀이를 선택.

```python
COUNT = int(input())
MAX_LENGTH = 116
dp = [-1] * MAX_LENGTH
dp[0], dp[1], dp[2] = 1, 1, 1

for idx, n in enumerate(dp):
    if n != -1:
        continue
    
    dp[idx] = dp[idx-1] + dp[idx-3]

print(dp[COUNT-1])
```

### 설명

<br/>

### 문제 

### 풀이

```python
```

### 설명

<br/>