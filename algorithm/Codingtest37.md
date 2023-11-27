# [인프런 - 김태원] 파이썬 알고리즘 문제풀이 (코딩테스트 대비) (18)(2021.2.11)



**본 내용은 해당 [강의](https://www.inflearn.com/course/파이썬-알고리즘-문제풀이-코딩테스트/dashboard) 토대로 작성**



# 이진트리 순회(깊이우선탐색)

아래와 같은 노드가 있을 때, 전위순회, 중위순회, 후위순회를 해보기

> 0 레벨 : 1
>
> 왼쪽 서브 트리 : 2, 4, 5
>
> 오른쪽 서브트리 : 3, 6, 7

**부모노드를 기준으로**

**왼쪽 자식 노드는 부모노드 * 2**

**오른쪽 자식 노드는 부모노드 * 2 + 1**

  ## 전위순회

1. 루트 노드 출발
2. 왼쪽 자식으로
3. 왼쪽 자식으로
4. 말단 노드이면 다시 뒤로 간 뒤 오른쪽 자식
5. 2~4 반복

**이동 전, 해야할 함수를 호출한다.**



### 알고리즘

```python
def DFS(v):
  if v > 7: # 제일큰 노드보다 크면 중단
      return;
  else:
      print(v, end =" "); # 전위순회 출력
      DFS(v * 2); # 왼쪽 노드 호출
      DFS(v * 2 + 1); # 오른쪽 노드 호출


if __name__ == "__main__" :
    DFS(1); # 깊이우선탐색
    # 1 2 4 5 3 6 7 출력
```



## 중위순회

* 왼쪽 하위 트리 방문 후 루트 노드를 방문



### 알고리즘

```python
def DFS(v):
  if v > 7: # 제일큰 노드보다 크면 중단
      return;
  else:
      DFS(v * 2); # 왼쪽 노드 호출
      print(v, end =" "); # 중위순회 출력
      DFS(v * 2 + 1); # 오른쪽 노드 호출


if __name__ == "__main__" :
    DFS(1); # 깊이우선탐색
    # 4 2 5 1 6 3 7 출력
```



## 후위순회

* 하위 트리 모드 방문 후 루트 노드를 방문
* 병합정렬에 주로 사용



### 알고리즘

```python
def DFS(v):
  if v > 7: # 제일큰 노드보다 크면 중단
      return;
  else:
      DFS(v * 2); # 왼쪽 노드 호출
      DFS(v * 2 + 1); # 오른쪽 노드 호출
      print(v, end =" "); # 후위순회 출력


if __name__ == "__main__" :
    DFS(1); # 깊이우선탐색
    # 4 5 2 6 7 3 1 출력
```
