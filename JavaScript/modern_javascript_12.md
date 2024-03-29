# 10장 - 객체 리터럴(1)

**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**



## 10.1 객체란?

* **자바스크립트는 객체 기반의 프로그래밍 언어**
  * 원시값을 제외하고 구성하는 거의 모든 것이 객체
* 객체 타입
  * 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조
* **변경 가능한 값(mutable value)**
* 0개 이상의 프로퍼티로 구성된 집합
  * key : value
* **상태와 동작을 하나의 단위로 구조화**
  * OPP




### 메서드(Method)

* 자바스크립트의 함수는 일급 개체이므로 값으로 취급
  * 즉, 프로퍼티의 값으로 사용 가능
* 프로퍼티 값으로서 사용된 함수를 메서드라 함

```JavaScript
const myPet = {
  // 프로퍼티들
  age: 6,
  name: 'siru',
  isCat: true,
  isDog: false,
  // 메서드
  eat() {
    console.log('냠냠');
  },
}
```



## 10.2 객체 리터럴에 의한 객체 생성

### 클래스 기반 객체 지향 언어

* C++, Java와 같은 클래스 기반 객체 지향 언어는 생성자를 호출하여 인스턴스 생성
  * 객체 : 클래스와 인스턴스
  * 클래스 : 인스턴스를 생성하기 위한 템플릿
  * 인스턴스 : 클래스에 의해 생성되어 메모리에 저장된 실체



### 자바스크립트

* 프로토타입 기반 객체 지향 언어
* 다양한 객체 생성 방법 지원
  * **객체 리터럴**
  * Object 생성자 함수
  * 생성자 함수
  * Object.create 메서드
  * 클래스(ES6)
* 객체리터럴을 주로 사용
  * 이해하기 쉽고 사용하기 간편
* 객체의 중괄화는 코드 븧록이 아님
  * 그러므로 세미콜론(;)을 붙여 종결을 명시



## 10.3 프로퍼티

* 객체를 이루는 키와 값
* 프로퍼티 키는 **문자열** 또는 **심벌**이 가능
  * 이외의 타입은 암묵적 타입 변환을 통해 문자열로 변환
* 값은 자바스크립트에서 사용 가능할 수 있는 모든 값이 가능
* 중복 선언된 프로퍼티 키는 나중에 선언된 것이 기존 것을 덮어쓰게 됨



### 프로퍼티 키의 식별자 네이밍 규칙

* 프로퍼티 키는 camel case를 따를 것
* 그렇지 않으면 따옴표로 묶어야 함
  * 따옴표를 붙이지 않으면 엉뚱하게 해석
  * kebab case인 경우, -를 연산자가 있는 표현식으로 해석

```JavaScript
const myPet = {
  // camel case라서 따옴표를 붙이지 않아도 됨
  name: 'siru',
  isCat: true,
  // kebab case라서 따옴표를 붙여야 함
  'is-dog': false,
}
```



### 프로퍼티 키의 동적 생성

* 프로퍼티 키를 동적 생성하기 위해 표현식을 대괄호로 묶음

```JavaScript
const petProperties = ['name', 'age', 'isCat', 'isDog'];

const myPet = {};

// petProperties를 순회하며 myPet 객체의 key를 동적 생성
petProperties.forEach(item => myPet[item] = '');

console.log(myPet); // {name: "", age: "", isCat: "", isDog: ""}
```

