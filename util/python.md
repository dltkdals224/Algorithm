# 파이썬 잡기술

## 숫자형

<br/>

---

## 문자열 자료형

### split과 join의 차이

```python
string = 'outer.inner'

splited_string = string.split('.')
print(splited_string)  # ['outer', 'inner']

# join의 형식이 js와 다름
joined_string = ('!').join(splited_string)
print(joined_string)  # outer!inner
```

<br/>

### 문자열 연결

```python
string1 = "hello"
string2 = "world"

# f함수 사용하는게 깔끔함.
result = f"{string1} {string2}"
print(result) # "hello world"
```

<br/>

### 문자열(이터러블) 뒤집기

```python
string = 'abcde'
array = ['e','f','g','h','i']

# slice notation은 [start:end:step]과 같은 형태로 사용
print(string[::-1])  # edcba
print(array[::-1])  # ['i', 'h', 'g', 'f', 'e']
```

<br/>

---

## 리스트 자료형

### 리스트 초기화

```python
length = 5

matrix_1_1 = [0] * length
print(matrix_1_1) # [0, 0, 0, 0, 0]
matrix_1_2 = [i for i in range(length)]
print(matrix_1_2)  # [0, 1, 2, 3, 4]

matrix_2 = [[0] * length for _ in range(length)]
print(matrix_2)
# [
#   [0, 0, 0, 0, 0],
#   [0, 0, 0, 0, 0],
#   [0, 0, 0, 0, 0],
#   [0, 0, 0, 0, 0],
#   [0, 0, 0, 0, 0]
# ]
```

<br/>

### key를 통한 정렬

```python
target = ['apple', 'banana', 'cherry', 'date']

target.sort(key=len)
print(target)  # ['date', 'apple', 'banana', 'cherry']

target.sort(key=len,reverse=True)
print(target)  # ['banana', 'cherry', 'apple', 'date']
```

<br/>

### sort와 sorted

```python
## sort
array = ['e','f','g','h','i']

# .sort()는 리스트의 전유물.
# sort()자체의 리턴값은 존재하지 않음.
print(array.sort(reverse=True))  # None
print(array)  # ['i', 'h', 'g', 'f', 'e']


## sorted
string = 'abcde'
dic = {'a':1,'b':3,'c':2}

# sorted는 모든 이터러블 객체를 대상으로 사용가능.
# 리스트 형태로 리턴함.
print(sorted(string))  # ['a', 'b', 'c', 'd', 'e']
print(sorted(dic,key = lambda target:dic[target]))  # ['a', 'c', 'b']
```

<br/>

---

## 튜플 자료형

<br/>

---

## 딕셔너리 자료형

### defaultdict

값 있으면 더하고, 없으면 삽입하는 로직을 if문으로 길게 작성하지 않아도 됨.

```python
from collections import defaultdict

dic = defaultdict(int)
for string in ['a','b','b','c']:
    dic[string] += 1

print(dic)  # defaultdict(<class 'int'>, {'a': 1, 'b': 2, 'c': 1})
```

<br/>

### dict 내부에 dict

```python

```

<br/>

### 딕셔너리 순회 중 값 추가

```python
dic = { 'a': -1, 'b': -1, 'c': -1}

for target in dic:
    if target == 'c':
        # 순회 중 값 추가 불가능
        dic['d'] = -1 # RuntimeError
```

```python
dic = { 'a': -1, 'b': -1, 'c': -1}

# 순회하는 딕셔너리를 리스트로 바꿔서 해결.
for target in list(dic):
    if target == 'c':
        dic['d'] = -1

print(dic) # {'a': -1, 'b': -1, 'c': -1, 'd': -1}
```

<br/>

---

## 집합 자료형

<br/>

---

## 불 자료형

<br/>

---

## 제어문

### for(let i ; i < number ; i++){ }

이터러블 객체 아닌 단순 int 순회

```python
# range()와 len() 섞어서 같이 사용
for num in range(len(split_url)):
```

<br/>

### 삼항 연산자

어쩔 수 없이 써야만 하는 구간이 있음.

```python
ans = []
dic = {1:True, 4:True}
iter = [0,1,2,3,4]

for target in iter:
    ans.append(target) if target in dic else False

print(ans)  # [1, 4]
```

<br/>

---

## 클래스

기본적으로 다음과 같은 형태로 동작한다.

```python
class Solution(object):
    def __init__(self, string):
        self.dic = {}

    def add(self):
        self.dic['a'] = 1

    def printf(self):
        print(self.dic)

sol = Solution(['1','2','3'])
sol.add()
sol.printf()  # {'a': 1}
```

\_\_init\_\_은 JavaScript의 constructor와 비슷하게 동작하고, <br/>
self는 JavaScript의 this와 비슷하게 동작한다.

<br/>

---

## 기타

### permutation & combination 과 math.perm & math.comb

```python
from itertools import permutations
from itertools import combinations

p = permutations('ABC')
print(list(p))  # [('A', 'B', 'C'), ('A', 'C', 'B'), ('B', 'A', 'C'), ('B', 'C', 'A'), ('C', 'A', 'B'), ('C', 'B', 'A')]

c = combinations('ABC', 2)
print(list(c))  # [('A', 'B'), ('A', 'C'), ('B', 'C')]

## 단순히 값에 대한 연산이 필요할 때는 math 모듈을 사용한다.
import math

p_v = math.perm(3, 2)
print(p_v)  # 6

c_v = math.comb(3, 2)
print(c_v)  # 3
```

<br/>
