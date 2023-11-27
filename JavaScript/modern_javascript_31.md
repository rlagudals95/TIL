# 19장 프로토 타입(1)

**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**



## 19.0 프로토 타입이란?

### 19.0.1 멀티 패러다임 언어

* 여러 패러다임을 지원하는 언어
* 자바스크립트는 멀티 패러다임 언어
  * 명령형, 함수형, 프로토타입 기반의 객체지향 프로그래밍을 지원



### 19.0.1 클래스

* 자바스크립트 ES6에서 도입
* 클래스 또한 함수
  * 프로토타입 기반 패턴의 문법적 설탕
* 생성자 함수보다 엄격
* 클래스만의 기능이 있음





## 19.1 객체지향 프로그래밍

* Object Oriented Programming
* 객체의 집합으로 프로그램을 표현
* 실세계의 실체를 프로그래밍에 접목
* 추상화 : 프로그램에 필요한 속성만 간추려 내어 표현하는 것
* 객체 : 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조
* 객체 지향 프로그래밍은 객체의 상태를 나타내는 데이터와 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각



## 19.2 상속과 프로토타입

* 상속: 부모 객체의 프로퍼티, 메서드를 자식 객체가 받아서 그대로 사용할 수 있는 것
  * 자바스크립트는 프로토타입을 기반으로 상속을 구현
  * 불필요한 중복 제거
  * 코드의 재사용성 관점에서 매우 유용

 ```JavaScript
 // 생성자 함수
 function Cat(name) {
   this.name = name;
 }
 
 // 모든 인스턴스에 공통적으로 사용할 메서드를 프로토타입에 추가
 Cat.prototype.introduceCat = function() {
   return `저는 고양이이고 이름은 ${this.name} 입니다.`;
 }
 
 // 인스턴스 생성
 const siru = new Cat('siru');
 const nunu = new Cat('nunu');
 
 console.log(siru.introduceCat());
 console.log(nunu.introduceCat());
 ```
