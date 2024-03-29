# 43장. Ajax(1)



**본 내용은 모던 자바스크립트 Deep Dive - 자바스크립트의 기본 개념과 동작 원리를 토대로 작성하였습니다.**



## 43.1 Ajax란?

* Asynchronous JavaScript and XML
* 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고 서버가 응답한 데이터를 수신하여 동적으로 갱신하는 프로그래밍 방식
* XMLHttpRequest 객체를 기반으로 동작
  * HTTP 비동기 통신을 위한 메서드와 프로퍼티 제공
* 이전의 웹 페이지는 화면이 전환되면 서버로부터 새로운 HTML을 전송받아 웹페이지 전체를 처음부터 렌더링
  * 불필요한 데이터 통신 발생
  * 처음부터 다시 렌더링하여, 화면이 순간적으로 깜빡거리는 현상 발생
  * 동기 방식으로 동작하여 다음 처리는 블로킹
* Ajax는 전통적인 패러다임을 획기적으로 전환
  * 웹 페이지 변경에 필요한 데이터만 비동기 방식으로 전달 받음
  * 변경할 필요가 없는 부분은 다시 렌더링하지 않음
  * 블로킹이 발생하지 않음
  * 브라우저 환경에서도 데스크톱 애플리케이션과 유사한 퍼포펀스가 가능해짐



## 43.2 JSON

* JavaScript Object Notation
* 클라이언트와 서버간의 HTTP 통신을 위한 텍스트 데이터 포맷
  * 언어에 종속되지 않는 포맷
  * 대부분의 프로그래밍 언어에서 사용 가능



### 43.2.1 JSON 표기 방식

* 객체 리터럴과 유사함
* 순수한 텍스트
* 키를 반드시 큰 따옴표로 묶어야 함

```json
{
  "name": "siru",
  "age": 7,
}
```



### 43.2.2 JSON.stringfy

* 클라이언트에서 서버로 객체를 전송할 때는 직렬화해야함
  * 문자열화 하는 것
* 배열도 JSON 포맷의 문자열 변환 가능

```JavaScript
const cat = {
  name: "siru",
  age: 7,
};

const catToJson = JSON.stringfy(cat);
```



### 43.2.3 JSON.parse

* 서버로부터 클라이언트에 전송된 JSON 포맷의 문자열을 객체화
  * 역직렬화