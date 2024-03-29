# 27장. 배열(2)

**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**

## 27.4 배열 생성

### 27.4.1 배열 리터럴

* 간편한 배열 생성 방식
* 배열 리터럴에 요소를 생략하면 희소 배열

```JavaScript
const cats = ['siru', 'nunu', 'mango'];
```



### 27.4.2 Array 생성자 함수

* Array 생성자 함수는 전달받은 인수의 개수에 따라 다르게 동작
  * 인수 0개 : 빈 배열 생성
  * 인수 1개 : 전달 받은 수만큼의 희소 배열 생성
  * 인수 2개 이상 : 전달 받은 인수들을 요소로 가지는 배열 생성

```JavaScript
const arr1 = new Array(); // 빈 배열 생성

const arr2 = new Array(3); // 인수가 하나일 때는 길이가 3인 희소 배열 생성

const arr3 = new Array(1, 2, 3); // 주어진 인수들을 요소로 가지는 배열 생성
```



### 27.4.3 Array.of

* ES6
* 전달된 인수를 요소로 갖는 배열 생성

```JavaScript
Array.of('siru'); // ['siru'];
```



### 27.4.4 Array.from

* ES6
* 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환
* 유사 배열 객체
  * 배열처럼 인덱스로 프로퍼티 값에 접근 가능

```JavaScript
// 문자열은 이터러블 객체
Array.from('siru'); // ['s', 'i', 'r', 'u'];
```

