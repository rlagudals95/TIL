# 21장 빌트인 객체(2)

**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**

## 21.3 원시값과 래퍼 객체

* 래퍼 객체 : 원시값에 객체처럼 접근하면 생성되는 임시 객체
  * 생성자 함수의 인스턴스 생성
  * prototype 메서드를 상속받아 사용 가능
  * 래퍼 객체 처리가 종료되면 래퍼 객체는 가비지 컬렉션의 대상이 됨
  * null, undefined는 래퍼 객체 생성하지 않음



## 21.4 전역 객체

* 가장 먼저 생성되는 특수한 객체
* 최상위 객체
* 브라우저는 window
* Node.js는 global
* globalThis
  * 환경 상관없이 전역 객체를 가리키는 식별자
  * 표준 사양
  * ECMAScript2020(ES11)
* 표준 빌트인 객체와 호스트 객체, var 키워드로 선언한 전역 변수, 전역 함수를 프로퍼티로 가짐



### 21.4.1 빌트인 전역 프로퍼티

* Infinity: 무한대를 나타내는 숫자값
* NaN: 숫자가 아님
* undefined: 원시 타입 undefined를 값으로 가짐



### 21.4.2 빌트인 전역 함수

* eval: 자바스크립트 코드를 나타내는 문자열을 인수로 전달 받아 런타임에 실행
  * 자신이 호출된 위치에 해당하는 스코프에서 런타임에 동적으로 수행
  * strict mode에서는 자신의 자체적인 스코프를 생성
  * let, const를 전달 받을 시에는 자동으로 strict mode로 동작
  * 보안에 매우 취약, 느린 처리 속도 -> 사용 지양
* isFinite: 전달 받은 수가 유한수인지 검사
  * null은 true(암묵적 타입변환에 의해서)
* isNaN: 전달 받은 인수가 NaN인지 검사
* parseFloat: 전달 받은 문자열을 실수로 해석하여 반환
* parseInt : 전달 받은 문자열을 정수로 해석하여 반환
  * 두번 째 인수로 기수를 전달 가능(기본 값은 10진수)
  * 첫 번째 전달된 문자열을 해당 기수의 숫자로 해석
* encdoeURI / decodeURI
* encodeURIComponent / decodeURIComponent



### 21.4.3 암묵적 전역

* 선언하지 않은 식별자에 값을 할당하면 전역 변수처럼 동작
  * 전역 객체의 프로퍼티가 되기 떄문
  * 변수가 아니므로 변수 호이스팅이 발생하지 않음
  * delete 연산자로 삭제 가능
  * 전역 변수 또한 프로퍼티지만, delete 연산자로 삭제 불가