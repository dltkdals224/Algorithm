### 문제

DAY 01  
⚠️ [소수 구하기 (#1929)](https://www.acmicpc.net/problem/1929)

반복 이해: 🟢🟢  
반복 풀이: 🔵

### 풀이

**에라토스테네스의 체**를 사용한다.  
(고대 그리스 수학자 에라토스테네스가 만든 소수를 찾는 방법)

임의의 자연수 n에 대해 **그 이하의 소수를 모두 찾는**, 가장 간단하고 빠른 방법.  
'주어진 수 하나가 소수인가?'를 따지는 상황이라면 다른 방법이 더 빠르다.

n이하의 소수를 모두 찾고 싶다면 1부터 n까지 쭉 나열한 다음에 2의 배수, 3의 배수, 5의 배수...로 제거해 나가는 것.

```python
M, N = map(int, input().split())
sieve = [True] * (N+1)  # !
sieve[0] = sieve[1] = False 

for i in range(2, int(N**0.5)+1):  # !
    if sieve[i]:  # !
        for j in range(i*i, N+1, i):  # !
            sieve[j] = False

for i in range(M, N+1):
    if sieve[i]:
        print(i)
```

<br/>

### 문제 

DAY 02  
[피보나치 비스무리한 수열](https://www.acmicpc.net/problem/14495)

### 풀이

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

<br/>

> AI

```python
n = int(input())

if n <= 3:
    print(1)
else:
    a, b, c = 1, 1, 1  # f(1), f(2), f(3)
    for _ in range(4, n + 1):
        current = c + a  # f(i) = f(i-1) + f(i-3)
        a, b, c = b, c, current
    print(c)

```

<br/>

### 문제 

DAY 03  
[바탕화면 정리](https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=python3)

반복 이해: 🟢  

### 풀이

```python
def solution(wallpaper):
    y_arr = []
    for idx, row in enumerate(wallpaper):
        if '#' in row:
            y_arr.append(idx)
    lux = y_arr[0]
    rdx = y_arr[-1] + 1
    
    luy = float('inf')  # !
    rdy = float('-inf')  # !
    for row in wallpaper:
        left = -1
        right = -1
        if row.find('#') >= 0:
            left = row.find('#')  # !
        if row[::-1].find('#') >= 0:  # !
            right = len(row) - row[::-1].find('#')
        
        if left >= 0 and left < luy:
            luy = left
        if right >= 0 and right > rdy:
            rdy = right
            
    return [lux, luy, rdx, rdy]
```

- `float('inf')`와 `float('-inf')`로 실수 값의 극한 초기화.

- `.index()` 메서드는 값이 존재하지 않을 때 예외(ValueError: substring not found)를 발생시킨다.  
따라서 `.find()`를 사용한다.

- 문자열을 뒤집는 방법은 단순히 `[::-1]`를 사용하는 것이다.

- 다른 풀이 중 나온 내용 메모

```python
# 리스트 내 리스트 90도 반시계 방향으로 회전
rotated = [list(row) for row in zip(*matrix)][::-1]

# 리스트 내 문자열 90도 반시계 방향으로 회전
rotated = ["".join(row) for row in zip(*matrix)][::-1]
```

<br/>

> AI

```python
def solution(wallpaper):
    rows, cols = [], []
    for i, row in enumerate(wallpaper):
        for j, ch in enumerate(row):
            if ch == '#':
                rows.append(i)
                cols.append(j)
    return [min(rows), min(cols), max(rows)+1, max(cols)+1]
```

<br/>

### 문제 

DAY 04  
⚠️ [안전 영역](https://www.acmicpc.net/problem/2468)

반복 이해: 🟢  
반복 풀이: 🔵

### 풀이

> AI

```python
import sys
sys.setrecursionlimit(10000)  # 재귀 깊이 제한 확장
input = sys.stdin.readline  # !

N = int(input())
grid = [list(map(int, input().split())) for _ in range(N)]
max_val = max(max(row) for row in grid)
ans = 0

def dfs(x, y, h):
    if x < 0 or x >= N or y < 0 or y >= N or grid[x][y] <= h or visited[x][y]:
        return
    visited[x][y] = True
    dfs(x+1, y, h)
    dfs(x-1, y, h)
    dfs(x, y+1, h)
    dfs(x, y-1, h)

for h in range(max_val+1):
    visited = [[False] * N for _ in range(N)]
    cnt = 0
    for i in range(N):
        for j in range(N):
            if grid[i][j] > h and not visited[i][j]:
                dfs(i, j, h)
                cnt += 1
    ans = max(ans, cnt)
print(ans)
```

<br/>

### 문제 

DAY 05  
[수열](https://www.acmicpc.net/problem/2559)

반복 이해: 🟢  

### 풀이

inflearn331317 강의에서의 풀이를 참조.

```python
import sys

COUNT, CRITERIA = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

answer = []
prefix = [0 for _ in range(COUNT + 1)]  # !

for idx in range(COUNT):
    prefix[idx + 1] = prefix[idx] + arr[idx]

for k in range(CRITERIA, COUNT + 1):
    answer.append(prefix[k] - prefix[k - CRITERIA])

print(max(answer))
```

<br/>

> AI (투 포인터)

```python
import sys
input = sys.stdin.readline

COUNT, CRITERIA = map(int, input().split())
arr = list(map(int, input().split()))

# 첫 구간의 합 계산
current_sum = sum(arr[:CRITERIA])
max_sum = current_sum

# 슬라이딩 윈도우: 왼쪽 포인터는 0부터, 오른쪽 포인터는 CRITERIA(=기준)부터 시작
for i in range(1, COUNT - CRITERIA + 1):
    current_sum = current_sum - arr[i - 1] + arr[i + CRITERIA - 1]
    max_sum = max(max_sum, current_sum)

print(max_sum)
```

<br/>