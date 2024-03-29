# 25장. 클래스(1)

**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**

## 25.1 클래스는 프로토타입의 문법적 설탕인가?

* JavaScript는 프로토타입 기반의 객체지향 언어
* 클래스는 프로토타입 기반의 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 문법적 설탕 + 새로운 객체 생성 매커니즘



### 클래스와 생성자 함수와의 차이

1. 클래스는 new 연산자 없이 호출하면 Error
2. 클래스는 extends, super 와 같은 키워드 제공
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작(TDZ)
4. 클래스는 기본적으로 strict mode가 지정되어 실행
5. 클래스의 constructor와 프로토타입 메서드, 정적 메서드는 열거 불가



## 25.2 클래스 정의

* 클래스는 일급 객체
  * 무명의 리터럴로 생성 가능
  * 변수, 자료구조에 할당 가능
  * 함수의 매개변수로 전달 가능
  * 함수의 반환값으로 사용 가능



### 클래스 예시

```JavaScript
// 클래스 선언문, 일반적으로 파스칼 케이스 사용
class Cat {}

// 익명 클래스 표현식
const Cat = class {};

// 기명 클래스 표현식
const Cat = class MyCat {};

// 메서드 정의
class Cat {
  // 생성자
  constructor(name) {
    this.name = name;
  }
  
  // 프로토타입 메서드(인스턴스에서 접근 가능)
  callName() {
    console.log(this.name);
  }
  
  // 정적 메서드
  static sayHi() {
    console.log('Hi!');
  }
}
```

