# 34장. 이터러블(2)

**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**



## 34.2 빌트인 이터러블

* Array
* String
* Map
* Set
* TypedArray
* arguments
* DOM Collection



## 34.3 for ... of 문

* 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]] 값이 true인 프로퍼티를 순회하며 열거
  * 프로퍼티 키가 심벌인 것은 열거하지 않음
* 내부적으로 next 메서드를 호출하여 순회
  *  next 메서드가 반환한 이터레이터 리절트 객체의 value 값을 for ... of문 변수에 할당

```JavaScript
for (const cat of ['siru', 'nunu', 'mango']) {
  console.log(cat);
}
```



## 34.4 이터러블과 유사 배열 객체

* 유사배열 객체는 인덱스로 프로퍼티 값에 접근 가능
  * length 프로퍼티 또한 가짐
  * for문으로 순회 가능
  * 단, 일반 객체이므로 Symbol.iterator 메서드가 없어 for ... of 문으로 순회 불가
* 유사 배열 객체이며 **이터러블**
  * arguments
  * NodeList
  * HTMLCollection
* 모든 유사 배여 객체가 이터러블은 아님
* Array.from 메서드로 유사 배열 객체 또는 이터러블을 인수로 전달 받아 배열로 반환 가능



## 34.5 이터레이션 프로토콜의 필요성

* 이터러블 : 데이터 공급자
* for ... of 문, 스프레드 문, 배열 디스트럭처링: 데이터 소비자
* **다양한 데이터 공급자가 이터레이션 프로토콜을 준수하도록 규정하면 데이터 소비자는 이터레이션 프로토콜만 지원하도록 구현하면 됨**
* 이터레이션 프로토콜은 데이터 소비자와 데이터 공급자를 연결하는 인터페이스 역할을 함