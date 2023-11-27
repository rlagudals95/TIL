# 자료구조와 알고리즘 - 정렬



**본 내용은 프로그래머스의 코딩테스트 광탈 방지 A to Z : JavaScript 강의를 토대로 작성하였습니다.**



## 1. 정렬이란?

* 요소들을 일정한 순서대로 열거하는 알고리즘
* 정렬 기준은 사용자가 정할 수 있음
* 비교식, 분산식 정렬이 있음
* 대부분의 언어에서 빌트인으로 제공
* 삽입, 선택, 버블, 머지, 힙, 퀵 정렬 등
  * 각각 정렬은 유리한 상황, 불리한 상황이 있음



## 2. 비교식 정렬

* 다른 요소와 비교를 통해 정렬



### 버블 정렬

* 서로 인접한 두 요소를 검사하여 정렬하는 알고리즘
  * 여러번 순회하여 기준에 맞게 인접한 두 요소를 교환
  * 교환이 일어나지 않을 때까지 순회
* O(n^2) 시간 복잡도



### 선택 정렬

* 선택한 요소와 가장 우선순위가 높은 요소를 교환하는 정렬 알고리즘
* O(n^2) 시간 복잡도



### 삽입 정렬

* 선택한 요소를 삽입할 수 있는 위치를 찾아 삽입하는 방식의 정렬 알고리즘
* 두번째 요소부터 시작
* O(n^2) 시간 복잡도



## 3. 분산식 정렬

* 요소를 분산하여 정렬
* 분할 정복
  * 문제를 작은 2개의 문제를 분리하고 더이상 분리가 불가능할 때 처리한 후 합치는 전략



### 합병 정렬

* 분할 정복 알고리즘을 이용한 최선과 최악이 같은 안정적인 정렬 알고리즘
* O(n log n) 시간 복잡도를 가짐
* 요소가 하나만 남을 때까지 절반으로 계속 나눔
* 요소를 합치며 정렬



### 퀵 정렬

* 분할 정복 알고리즘을 이용한 매우 빠르지만 최악의 경우(2차시간)가 존재
  * 불안정 정렬
* O(n log n) 시간복잡도를 가짐
* 피벗이라는 기준으로 좌측과 우측을 나눔
* 피벗을 기준으로 작은 값이 왼쪽, 큰 값이 오른쪽에 배치됨



## 4.  JavaScript에서의 정렬

* 아무 파라미터 없이 정렬하면, ASCII 문자 순서로 정렬 됨
* callback으로 기준을 정해주어야함

```JavaScript
const example = [1, 3, 5, 2, 7];

// 오름차순 정렬
example.sort((a, b) => a - b);

// 내림차순 정렬
example.sort((a, b) => b - a);
```





## Reference

[프로그래머스의 코딩테스트 광탈 방지 A to Z : JavaScript](https://school.programmers.co.kr/learn/courses/13213)
