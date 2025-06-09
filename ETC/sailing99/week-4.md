### 문제

DAY 22  
[신규 아이디 추천](https://school.programmers.co.kr/learn/courses/30/lessons/72410)

<!-- 반복 이해: 🟢   -->
<!-- 반복 풀이: 🔵 -->

### 풀이

```python
import re

def clean_string(s: str, allowed: str):
    pattern = f'[^a-z0-9{re.escape(allowed)}]'
    return re.sub(pattern, '', s)

def solution(new_id):    
    new_id = new_id.lower()
    new_id = clean_string(new_id, '-_.')  # !
    new_id = re.sub(r'\.+', '.', new_id)  # !
    new_id = new_id.strip('.')
    if(new_id == ''):
        new_id += 'a'
    new_id = new_id[:15].rstrip('.')
    while len(new_id) < 3:
        new_id = new_id + new_id[-1]
    
    return new_id
```

- re 함수를 통한 문자열 필터링 구조

<br/>

### 문제

DAY 23  
[너구리 구구](https://www.acmicpc.net/problem/18126)

<!-- 반복 이해: 🟢   -->
<!-- 반복 풀이: 🔵 -->

### 풀이

```python

```

<br/>


### 문제

DAY 24  
[강아지는 많을 수록 좋다](https://www.acmicpc.net/problem/27971)

<!-- 반복 이해: 🟢   -->
<!-- 반복 풀이: 🔵 -->

### 풀이

```python

```

<br/>


### 문제

DAY 25  
[김밥천국의 계단](https://www.acmicpc.net/problem/28069)

<!-- 반복 이해: 🟢   -->
<!-- 반복 풀이: 🔵 -->

### 풀이

```python

```

<br/>


### 문제

DAY 26  
[나의 인생에는 수학과함께](https://www.acmicpc.net/problem/17265)

<!-- 반복 이해: 🟢   -->
<!-- 반복 풀이: 🔵 -->

### 풀이

```python

```

<br/>
