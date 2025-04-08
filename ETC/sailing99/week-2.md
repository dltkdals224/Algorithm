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

- 알고리즘 문제 풀이 적합성	기준, 값의 입력에는 무조건 sys.stdin.readline().split()을 사용.  
`input = sys.stdin.readline`으로 설정 후 input()을 사용하는 경우도 많음.

- 배열로 만드는 list(map(int, sys.stdin.readline().split())) 방식을 기억.

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
[쇠막대기](https://www.acmicpc.net/problem/10799)

### 풀이

```python
import sys  # !
array = sys.stdin.readline()

ans = 0
stack_num = 0

for idx, value in enumerate(array): 
    if value == '(':
        stack_num += 1
    if value == ')':
        if array[idx - 1] == '(':
            stack_num -= 1
            ans += stack_num
        else:
            stack_num -= 1
            ans += 1

print(ans)
```

- 런타임 에러 종류  
(import sys의 부재로 발생했던 NameError)

| 에러 종류              | 발생 원인                                                          | 설명                                                         |
|---------------------|------------------------------------------------------------------|------------------------------------------------------------|
| **NameError**       | 참조하는 이름이 정의되지 않았을 때, <br/>외장 함수를 import하지 않고 사용할 때          | 선언되지 않은 변수나 함수에 접근하거나, <br/>오타로 인해 올바른 이름이 사용되지 않을 때 발생합니다. |
| **TypeError**       | 부적절한 데이터 타입 간의 연산 <br/>또는 함수에 잘못된 타입의 인자 전달                  | 올바르지 않은 타입의 데이터끼리 연산하거나 <br/> 함수 호출 시 인자의 타입이 맞지 않을 때 발생합니다.    |
| **IndexError**      | 시퀀스(리스트, 튜플 등)의 인덱스 범위를 벗어난 경우                           | 존재하지 않는 인덱스로 요소에 접근할 때 발생하며, <br/> 인덱스 값이 올바른 범위를 벗어났을 때 나타납니다.  |
| **KeyError**        | 딕셔너리에서 존재하지 않는 키로 값을 참조할 때                                | 딕셔너리에 없는 키를 사용해 값을 호출하려 할 때 발생합니다.                         |
| **ValueError**      | 적절한 타입이지만 부적절하거나 예상치 못한 값을 전달받은 경우                      | 함수나 연산이 올바른 타입의 인자를 받았으나, <br/>해당 값이 허용되지 않는 경우에 발생합니다.         |
| **ZeroDivisionError** | 숫자를 0으로 나누려고 시도할 때                                         | 산술 연산에서 분모가 0일 경우 발생합니다.                                  |
| **AttributeError**  | 객체에 존재하지 않는 속성이나 메서드를 호출할 때                                | 객체가 특정 속성이나 메서드를 가지고 있지 않을 때 발생합니다.                           |
| **ImportError/ModuleNotFoundError** | 모듈 또는 패키지를 찾을 수 없을 때                                 | 모듈이 존재하지 않거나, 경로가 잘못되었을 때 발생합니다.                  |
| **RecursionError**  | 재귀 호출의 깊이가 너무 깊어 최대 재귀 한도를 초과했을 때                         | 재귀 함수의 호출이 제한된 깊이를 초과하면 발생합니다.                              |


<br/>

### 문제 

DAY 08  

<!-- 반복 이해: 🟢   -->

### 풀이

<br/>

### 문제 

DAY 09  

<!-- 반복 이해: 🟢   -->

### 풀이

<br/>

### 문제 

DAY 10  

<!-- 반복 이해: 🟢   -->

### 풀이

<br/>