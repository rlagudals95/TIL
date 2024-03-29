## 05장 - 표현식과 문

**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**



## 5.1 값

* 값(value)은 표현식(expression)이 평가(evaluate)되어 생성된 결과를 말함
  * 모든 값은 데이터 타입을 가지고 메모리에 2진수 비트의 나열로 저장
* 변수는 **값을 저장**
  * 값에 대한 이름표



## 5.2 리터럴

* Literal
* 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법
* 값을 생성하기 위해 미리 약속한 표기법
* 표현식 중 하나



## 5.3 표현식

* **값으로 평가될 수 있는 문**
* 평가되면 새로운 값을 생성하거나 기존 값 참조
* 리터럴
* 표현식과 표현식이 평가된 값은 **동치**
  * 값이 위치할 수 있으면 표현식 또한 위치할 수 있음
* 콘솔창에서 표현식을 입력하면 값으로 나타나게 됨(완료값)
* 표현식은 다른 표현식의 일부가 될 수 있음



## 5.4 문

* statement
* 프로그램을 구성하는 기본 단위이자 최소 실행 단위
  * 선언문, 할당문, 조건문, 반복문 등
* 프로그램은 문의 집합
* 프로그래밍은 문을 작성하고 순서대로 나열하는 것
* 토큰(token)
  * 문법적으로 더 이상 나눌 수 없는 코드 기본 요소
  * 문은 여러 토큰으로 구성
  * 예약어, 변수, 세미콜론, 마침표 등



## 5.5 세미콜론과 세미콜론 자동 삽입 기능

* 세미콜론(;)은 문의 종료를 나타냄
  * if 문, for 문, 함수 등은 제외(자체 종결성)
* JavaScript에서 세미콜론은 생략 가능
  * 세미콜론 자동 삽입 기능(**ASI, Automatic Semicolon Insertion**)
* 단, ASI와 개발자의 예측이 일치하지 않는 경우가 있으므로 **세미콜론을 명시적으로 붙일 것**



## 5.6 표현식인 문과 표현식이 아닌 문

* 표현식은 문의 일부 또는 그 자체로 문이 될 수 있음
* **변수에 할당해보기**
  * 변수에는 값만을 할당할 수 있으므로 표현식이 아닌 문이면, 할당이 되지 않음(SyntaxError)
* 표현식이 아닌 문은 완료값이 나오지 않음(Undefined)