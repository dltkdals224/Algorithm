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

- 무방향 그래프 (Undirected Graph)
- 방향 그래프 (Directed Graph)
- 가중치 그래프 (Weighted Graph)(= Network)
- 연결 그래프 (Connected Graph), 비연결 그래프 (Disconnected Graph)
- 순환 그래프 (Acyclic Graph)
- 완전 그래프 (Complete Graph)
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
def solution(numbers, target):
    def dfs(index, current_sum):
        if index == len(numbers):
            return 1 if current_sum == target else 0
        
        plus = dfs(index + 1, current_sum + numbers[index])
        minus = dfs(index + 1, current_sum - numbers[index])
        
        return plus + minus

    return dfs(0, 0)
```

```python
# BFS
from collections import deque

def solution(numbers, target):
    queue = deque([(0, 0)])  # 양방향 queue
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
```

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
    dic.setdefault(A, []).append(B)
    dic.setdefault(B, []).append(A)

for key in dic:
    dic[key].sort()

dfs(dic, V, None)
bfs(dic, V)

print(' '.join(map(str, dic['dfs'])))
print(' '.join(map(str, dic['bfs'])))
```

<br/>

> [유기농 배추](https://www.acmicpc.net/problem/1012)

```python
```

<br/>
<br/>
