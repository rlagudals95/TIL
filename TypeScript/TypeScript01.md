# 타입스크립트 입문 - 타입스크립트 소개와 배경

**본 내용은 인프런 장기효(캡틴판교)님의 타입스크립트 입문 - 기초부터 실전까지 강의를 토대로 작성하였습니다.**



## 1. 타입스크립트란?

* JavaScript에 Type을 사용 가능
  * JavaScript의 Superset
  * JavaScript의 확장된 언어
* 브라우저에서 실행하기 위해 파일을 한 번 변환
  * **컴파일 과정**을 거침



## 2. 타입스크립트의 장점

* 에러의 사전 방지
  * JavaScript는 런타임에서 타입을 정하는 동적 타입 언어이다.
  * 타입 에러의 위험이 크다.
  * 암묵적 타입 변환으로 인해 의도하지 않은 동작을 일으킬 수 있다.
* 코드 가이드 및 자동완성
  * VSC는 툴 내부가 타입스크립트로 작성되어 있어서 개발에 최적화
  * 자바스크립트의 각 API를 자동완성 시켜준다.
  * 선언한 type의 값이 다른 변수에 할당되어도 해당하는 타입의 API가 자동 완성된다.
  * vsc intelligence



### 암묵적 타입 변환

* 합 연산(+)의 경우, 피연산자 중 하나가 문자열이면 나머지 피연산자도 문자열로 암묵적 타입 변환한다.
  * 예기치 못한 오류 발생

```JavaScript
function sum(a, b) {
  return a + b;
}

sum(10 , 20); // 30
sum(10, '20'); // 암묵적 타입 변환으로 인해 1020이 return
```



## 3. 자바스크립트에서 타입 정의하기

* Jsdoc을 사용하여 타입을 정의할 수 있다.
  * API의 타입을 하나 하나 작성해야한다.
  * 재활용, 확장의 관점에서 타입스크립트보다 좋지 않다.

```JavaScript
// @ts-check

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
  return a + b;
}

sum(10, 20);
```


# Reference

[타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/타입스크립트-입문)

[타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)