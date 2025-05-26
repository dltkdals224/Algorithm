### 문제

DAY 15  
⚠️ [과자 나눠주기](https://www.acmicpc.net/problem/16401)

반복 이해: 🟢  
반복 풀이: 🔵

### 풀이

> AI

```python
import sys

M, N = map(int, sys.stdin.readline().split())
snacks = list(map(int, sys.stdin.readline().split()))

# 이진 탐색 설정
left = 1
right = max(snacks)
result = 0

# 이진 탐색 수행
while left <= right:  # !
    mid = (left + right) // 2

    # 현재 길이(mid)로 몇 명에게 나눠줄 수 있는지 계산
    count = 0
    for snack in snacks:
        count += snack // mid

    if count >= M:  # 모두에게 나눠줄 수 있음 -> 길이 증가 시켜보기
        result = mid  # 현재 길이 저장
        left = mid + 1
    else:  # 모두에게 나눠줄 수 없음 -> 길이 감소 시켜보기
        right = mid - 1

print(result)
```

이진 탐색(Binary Search)은 `정렬된 데이터에서 효율적으로 값을 찾는 알고리즘`.  
다음은 이진 탐색을 적용해야 하는 문제의 주요 특징과 포인트.

1.  정렬된 데이터에서의 탐색

        이진 탐색의 가장 기본적인 적용 사례는 정렬된 배열에서 특정 값을 찾는 것.

    문제에서 다음과 같은 특징이 있다면 이진 탐색을 고려해야 한다.

- 데이터가 이미 정렬되어 있거나, 정렬할 수 있는 상황
- 특정 값이나 조건을 만족하는 요소를 찾아야 함
- 데이터의 크기가 매우 큰 경우 (선형 탐색으로는 시간 초과 발생 가능)

<br/>

2. 파라메트릭 서치(Parametric Search) 문제

   많은 코딩 테스트에서 이진 탐색은 파라메트릭 서치 유형으로 출제된다.

- 최적화 문제를 결정 문제(Yes/No)로 바꾸어 해결하는 기법
- "특정 조건을 만족하는 값 중 최대/최소값을 찾는" 문제
- 주로 "~의 최댓값", "~의 최솟값"을 구하는 문제

<br/>

3. 범위가 큰 탐색 공간

   이진 탐색은 다음과 같은 상황에서 특히 유용하다.

- 탐색 범위가 매우 큰 경우 (ex. 10^9 이상)
- 시간 제한이 빡빡한 경우
- 선형 탐색으로는 시간 초과가 발생할 가능성이 높은 경우

해당 문제는 "최대/최소 얼마까지 가능한가?"의 형태를 묻고 있는 전형적인 파라메트
릭 서치 문제.  
M과 N이 모두 최대 10^6까지 가능하며, 과자의 길이도 최대 10^9까지 가능.

시간 복잡도가 O(log N)을 구사하는 효율적인 알고리즘이 요구됨.

<br/>

### 문제

DAY 16  
⚠️ [포도주 시식](https://www.acmicpc.net/problem/2156)

<!-- 반복 이해: 🟢   -->
<!-- 반복 풀이: 🔵 -->

### 풀이

> AI

```python
import sys

input = sys.stdin.readline

n = int(input())
wine = [0]  # 1-indexed로 맞추기 위한 더미
for _ in range(n):
    wine.append(int(input()))

if n == 1:
    print(wine[1])
elif n == 2:
    print(wine[1] + wine[2])
else:
    dp = [0] * (n+1)
    dp[1] = wine[1]
    dp[2] = wine[1] + wine[2]
    for i in range(3, n+1):
        dp[i] = max(
            dp[i-1],
            dp[i-2] + wine[i],
            dp[i-3] + wine[i-1] + wine[i]
        )
    print(dp[n])
```

<br/>

### 문제

DAY 17  
[JadenCase 문자열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12951)

### 풀이

```python
def solution(words):
    arr = []
    words = words.lower()
    for word in words.split(' '):
        if word:
            word = word[0].upper() + word[1:]
        arr.append(word)

    return ' '.join(arr)
```

- "공백문자가 연속해서 나올 수 있습니다."  
=> 검증 방식에 대해 한번 생각해 볼 필요를 주는 부분


<br/>

### 문제

DAY 18  
⚠️ [진우의 달 여행 (Small)](https://www.acmicpc.net/problem/17484)

반복 이해: 🟢  
반복 풀이: 🔵

### 풀이

> AI

```python
import sys

input = sys.stdin.readline

rows, cols = map(int, input().split())
fuel_costs = [list(map(int, input().split())) for _ in range(rows)]

# 방향
dc = [-1, 0, 1]

# DP 배열 초기화
dp = [[[float('inf')] * 3 for _ in range(cols)] for _ in range(rows)]

# 첫 번째 행 초기화 (시작점)
for col in range(cols):
    for dir in range(3):
        dp[0][col][dir] = fuel_costs[0][col]

# DP 계산
for row in range(1, rows):
    for col in range(cols):

        # 왼쪽 대각선으로 현재 위치에 도착한 경우 (dir=0)
        if col > 0:
            dp[row][col][0] = min(dp[row-1][col-1][1], dp[row-1][col-1][2]) + fuel_costs[row][col]

        dp[row][col][1] = min(dp[row-1][col][0], dp[row-1][col][2]) + fuel_costs[row][col]

        # 오른쪽 대각선으로 현재 위치에 도착한 경우 (dir=2)
        if col < cols-1:
            dp[row][col][2] = min(dp[row-1][col+1][0], dp[row-1][col+1][1]) + fuel_costs[row][col]

# 마지막 행에서 최소 연료량 찾기
min_fuel = float('inf')
for col in range(cols):
    for dir in range(3):
        min_fuel = min(min_fuel, dp[rows-1][col][dir])

print(min_fuel)
```

<br/>

### 문제

DAY 19  
[리그 오브 레전설(small)](https://www.acmicpc.net/problem/17271)

### 풀이

```python
import math
import sys

input = sys.stdin.readline
N, M = list(map(int, input().split()))
count = N // M

ans = 0
for B_count in range(count + 1):
    A_count = N - B_count * M
    ans += math.factorial(A_count + B_count) // (math.factorial(A_count) * math.factorial(B_count))

print(ans % 1000000007)
```

<br/>
