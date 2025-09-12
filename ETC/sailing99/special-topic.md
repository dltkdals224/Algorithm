# 그래프

## 개념

실제 세계의 현상이나 사물을 정점(Vertex) 또는 노드(Node)와 간선(Edge)로 표현하기 위해 사용

- 노드: 정점
- 간선: 위치 간의 관계를 표시한 선(=노드를 연결한 선)
- 인접 정점: 간선으로 직접 연결된 정점
- 차수: 노드에 연결된 간선의 수(무방향 그래프에서는 노드의 차수 = 인접한 노드 수)
- 경로: 그래프에서 노드들을 연결하는 간선의 순서를 나타내는 순서쌍
- 사이클: 그래프에서 동일한 노드로 되돌아오는 경로

<br/>

## 그래프 종류

- 무방향 그래프 (Undirected Graph), 방향 그래프 (Directed Graph)
- 연결 그래프 (Connected Graph), 비연결 그래프 (Disconnected Graph)
- 완전 그래프 (Complete Graph)
- 부분 그래프(Sub Graph), 부분신장 그래프(Spanning Graph)
- 가중치 그래프 (Weighted Graph)(= Network)
- 순환 그래프 (Acyclic Graph)
- 그래프와 트리의 차이

<br/>

## DFS와 BFS

### DFS 

<video src="./video/DFS.m4v" width="640" height="360" controls>
    DFS
</video>

### BFS

<video src="./video/BFS.m4v" width="640" height="360" controls>
    BFS
</video>

### DFS or BFS

- 그래프의 모든 정점을 방문해야하는 문제 -> DFS와 BFS중 편한 것을 사용
- 경로의 특징을 저장(?)하는 문제 -> DFS
- 최단거리를 구하는 문제(ex. 미로찾기) -> BFS
- 검색 대상 그래프가 큰 경우 -> DFS
- 검색 대상 그래프가 별로 크지 않고 검색 시작 지점으로부터 원하는 대상이 별로 멀지 않은 경우 -> BFS

<br/>

### Example

> [타겟 넘버](https://school.programmers.co.kr/learn/courses/30/lessons/43165)
(설명을 위해 따로 추가한 문제)

반복 이해: 🟢  

```python
# DFS
def dfs(numbers, target, current_sum):
    if not numbers:
        return 1 if current_sum == target else 0

    next_num = numbers[0]
    rest = numbers[1:]

    return dfs(rest, target, current_sum + next_num) + dfs(rest, target, current_sum - next_num)

def solution(numbers, target):
    return dfs(numbers, target, 0)
```

- 기본적으로 재귀 호출을 사용한다.

<br/>

```python
# BFS
from collections import deque

def bfs(numbers, target):
    queue = deque([(0, 0)])
    count = 0

    while queue:
        index, current_sum = queue.popleft()
        
        if index == len(numbers):
            if current_sum == target:
                count += 1
        else:
            queue.append((index + 1, current_sum + numbers[index]))
            queue.append((index + 1, current_sum - numbers[index]))

    return count

def solution(numbers, target):
    return bfs(numbers, target)
```

- 기본적으로 덱(deque)(=양방향 queue)을 사용한다.

<br/>

> [DFS와 BFS](https://www.acmicpc.net/problem/1260)

```python
import sys
from collections import deque

def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()

    if node in visited:
        return

    visited.add(node)
    graph['dfs'].append(node)

    for neighbor in graph.get(node, []):
        dfs(graph, neighbor, visited)

def bfs(graph, start):
    visited = []
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.append(node)
            queue.extend([n for n in graph.get(node, []) if n not in visited])

    graph['bfs'] = visited

input = sys.stdin.readline
[N, M, V] = list(map(int, input().split()))

dic = {'dfs': [], 'bfs': []}
for a in range(M):
    [A, B] = list(map(int, input().split()))
    dic.setdefault(A, []).append(B)  # !
    dic.setdefault(B, []).append(A)  # !

for key in dic:
    dic[key].sort()

dfs(dic, V, None)
bfs(dic, V)

print(' '.join(map(str, dic['dfs'])))
print(' '.join(map(str, dic['bfs'])))
```

- props 구성 형식

기본적으로 DFS는 props로 '전체 그래프, 현재 노드, 방문 노드'가 필요하고,  
BFS는 '전체 그래프, 현재 노드'가 필요하다.

- DFS, BFS 에서 dictionary 기반의 graph를 사용하는 구조

```python
dic = {'dfs': [], 'bfs': []}  # 내부 구성은 변동 가능 (딕셔너리를 빈 값으로 두고 시작하는 것이 보다 일반적)

for a in range(M):
    [A, B] = list(map(int, input().split()))
    dic.setdefault(A, []).append(B)
    dic.setdefault(B, []).append(A)
```

[무방향 그래프, 방향 그래프, 연결 그래프, 비연결 그래프] 에서 유의미하게 사용가능한 코드.  
[가중치 그래프, 루프/중복간선 그래프, 트리 그래프] 는 다른 형태로 기본 구조 할당 필요.

<br/>

> [유기농 배추](https://www.acmicpc.net/problem/1012)

```python
from collections import deque
import sys

sys.setrecursionlimit(10000)  # 재귀 깊이 제한 확장 (default 1000)
input = sys.stdin.readline

def bfs(graph, coor):
    queue = deque([coor])
    x, y = coor
    graph[y][x] = 0  # 방문 처리

    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]  # 방향 벡터의 사용 방법 (dx, dy가 한 묶음)

    while queue:
        cx, cy = queue.popleft()
        for i in range(4):
            nx = cx + dx[i]
            ny = cy + dy[i]
            if 0 <= ny < len(graph) and 0 <= nx < len(graph[0]) and graph[ny][nx] == 1:
                graph[ny][nx] = 0
                queue.append((nx, ny))

T = int(input())
for _ in range(T):
    M, N, K = map(int, input().split())
    graph = [[0] * M for _ in range(N)]  # !

    for _ in range(K):
        X, Y = map(int, input().split())
        graph[Y][X] = 1

    count = 0
    for y in range(N):
        for x in range(M):
            if graph[y][x] == 1:
                bfs(graph, (x, y))  # ! bfs의 역할
                count += 1

    print(count)

```

- 2차원 격자 그래프에서의 연결 요소(연결된 덩어리(=connected region)) 탐색 문제

기본적으로 모든 영역을 순회.  
활성화 영역(=답이 되는 영역)이 탐지되면 dfs 혹은 bfs를 통해 인접 활성화 영역을 모두 평탄화.  
그리고 count를 증가시킴.

- 방향 벡터를 통한 인접 영역 검사

```python
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
```
dx, dy가 한 세트로 구성되어 고정적 4중 for문을 순회하며 영역을 탐지.  
인접 좌표를 나타내는 (nx, ny)가 그래프 영역을 벗어나지 않고 활성화 영역이라면 비활성화 시키고 queue에 추가.

<br/>

### 추가 URL

[완전탐색(DFS)을 잘 풀고 싶다면? - 'N과 M 시리즈'](https://cafe.naver.com/f-e/cafes/31258781/articles/1468?boardtype=L&menuid=29&referrerAllArticles=false)

[DFS/BFS 가장 기본이 되는 문제 추천](https://cafe.naver.com/f-e/cafes/31258781/articles/3673?boardtype=L&menuid=29&referrerAllArticles=false)