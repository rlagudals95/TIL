# 기초 JS, CS 상식 - 함수형 프로그래밍



**본 내용은 프로그래머스의 코딩테스트 광탈 방지 A to Z : JavaScript 강의를 토대로 작성하였습니다.**



## 1. 패러다임

* 프로그램은 **순차, 분기, 반복, 참조**로 구성
  * 패러다임은 위 4가지 요소를 어떻게 이용할 지를 다룸
* 객체지향은 객체를 통해 묶고 객체간 통신함으로 프로그램이 동작함
* 함수형은 데이터를 함수를 이용해 새로운 데이터를 만들어 나가는 데이터 파이프 라인 형태로 작동



## 2. 함수형 패러다임

* 객체지향 추상화의 최소 단위가 객체인것 처럼, 함수형은 함수가 최소 단위
* 함수 단위로 나눠지므로 재사용성이 높음
* 불변성을 지향하기에 동작을 예측하기 쉽고 사이드 이펙트 방지
  * 동시성 문제도 해결
* 객체지향은 제어 흐름의 간접적인 전환에 부과되는 규율
* 함수형은 변수 할당에 부과되는 규율


**함수형 코드예시**

1. 고차 함수 (Higher-Order Function):
함수를 매개변수로 받거나 함수를 반환하는 함수를 사용하여 추상화 수준을 높이는 방법입니다.


```javascript
 // 고차 함수 예시: map
 const numbers = [1, 2, 3, 4, 5];
 const doubled = numbers.map(x => x * 2);
 console.log(doubled); // [2, 4, 6, 8, 10]
```

2. 순수 함수 (Pure Function):
부작용이 없는 함수로, 같은 입력에 대해서 항상 같은 출력을 반환합니다.

```javascript
 // 순수 함수 예시
 function add(a, b) {
   return a + b;
 }
 
 const result = add(3, 4);
 console.log(result); // 7
```

### 장점

* 상태가 없어, 사이드 이펙트를 줄일 수 있음
* 재사용성이 높음
* 코드가 짧고 간결



### 단점

* 상태가 없어, 상태 조작을 위해 많은 리소스를 사용해야 함
* 함수를 많이 쪼개야함
* 코드가 짧고 간결



## 3. 선언형 프로그래밍

* 기존 명령형 프로그래밍은 문제를 어떻게 해결해야 하는지 컴퓨터에게 명령을 내리는 방법
* 선언형 프로그래밍은 무엇을 해결해야할 지에 집중하고 해결 방법은 컴퓨터에게 위임
* Data Flow

**선언형 코드예시**

1. 선언형 배열 조작 (Declarative Array Manipulation):
어떤 동작을 수행하는 대신 어떤 결과를 얻을지 선언합니다.

```javscript
 // 선언형 배열 조작 예시: filter와 reduce를 사용하여 합 구하기
 const numbers = [1, 2, 3, 4, 5];
 const sum = numbers.filter(x => x % 2 === 0).reduce((acc, val) => acc + val, 0);
 console.log(sum); // 6
```

2. 선언형 객체 조작 (Declarative Object Manipulation):
객체 조작에서 명령형 프로그래밍보다 더 간결하고 읽기 쉽게 표현할 수 있습니다.

```
 // 선언형 객체 조작 예시: Object.assign을 사용하여 객체 합치기
 const person = { name: 'John', age: 30 };
 const additionalInfo = { job: 'Developer' };
 
 const updatedPerson = Object.assign({}, person, additionalInfo);
 console.log(updatedPerson); // { name: 'John', age: 30, job: 'Developer' }
```



### 4. 멀티 패러다임

* JavaScript는 멀티 패러다임이 가능
* 각 패러다임의 장점을 활용하기



## Reference

[프로그래머스의 코딩테스트 광탈 방지 A to Z : JavaScript](https://school.programmers.co.kr/learn/courses/13213)

