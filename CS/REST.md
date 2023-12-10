# REST

REST는 Representational State Transfer의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미합니다.

* HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고,
* HTTP Method(POST, GET, PUT, DELETE, PATCH 등)를 통해
* 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미합니다.

CRUD Operation이란?
CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말로 
REST에서의 CRUD Operation 동작 예시는 다음과 같다.

* Create : 데이터 생성(POST)
* Read : 데이터 조회(GET)
* Update : 데이터 수정(PUT, PATCH)
* Delete : 데이터 삭제(DELETE)


* REST 구성 요소
 * REST는 다음과 같은 3가지로 구성이 되어있다. 
   * 자원(Resource) : HTTP URI
   * 자원에 대한 행위(Verb) : HTTP Method
   * 자원에 대한 행위의 내용 (Representations) : HTTP Message Pay Load


* REST의 특징
 * Server-Client(서버-클라이언트 구조)
 * Stateless(무상태)
 * Cacheable(캐시 처리 가능)
 * Layered System(계층화)
 * Uniform Interface(인터페이스 일관성)
 

# REST API란?

RESPT API란 REST의 원리를 따르는 API를 의미합니다.
하지만 REST API를 올바르게 설계하기 위해서는 지켜야 하는 몇가지 규칙이 있으며 해당 규칙을 알아 보겠습니다.

## REST API 설계 예시

1. URI는 동사보다는 명사를, 대문자보다는 소문자를 사용하여야 한다.

```
  Bad Example http://khj93.com/Running/
  Good Example  http://khj93.com/run/  
```

2. 마지막에 슬래시 (/)를 포함하지 않는다.

```
  Bad Example http://khj93.com/test/  
  Good Example  http://khj93.com/test
```

3. 언더바 대신 하이폰을 사용한다.

```
  Bad Example http://khj93.com/test_blog
  Good Example  http://khj93.com/test-blog  
```

4. 파일확장자는 URI에 포함하지 않는다.

```
  Bad Example http://khj93.com/photo.jpg  
  Good Example  http://khj93.com/photo  
```

5. 행위를 포함하지 않는다.

```
  Bad Example http://khj93.com/delete-post/1  
  Good Example  http://khj93.com/post/1  
```


## RESTful이란?

RESTFUL이란 REST의 원리를 따르는 시스템을 의미합니다.

하지만 REST를 사용했다 하여 모두가 RESTful 한 것은 아닙니다.  
**REST API의 설계 규칙을 올바르게 지킨 시스템을 RESTful하다 말할 수 있으며**


모든 CRUD 기능을 POST로 처리 하는 API 혹은 
URI 규칙을 올바르게 지키지 않은 API는 REST API의 설계 규칙을 올바르게 지키지 못한 시스템은 REST API를 사용하였지만 
RESTful 하지 못한 시스템이라고 할 수 있습니다.


### References
https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80

