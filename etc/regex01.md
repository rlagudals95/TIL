# 정규표현식(1)

**본 내용은 드림코딩 by 엘리님의 정규표현식, 더이상 미루지 말자 강의를 토대로 작성하였습니다.**



## 1. 정규표현식이란?

* regex
  * Regular Expression
* 텍스트에서 원하는 특정 패턴을 찾을 때 사용
* 찾은 패턴을 다른 문자열로 변환
* 사용자가 입력한 데이터가 유효한지 검사
* 1950년 미국의 한 수학자 Stephen에 의해 개발
* 유닉스 계열에서 텍스트와 같은 것들을 처리하고 프로세싱하는 데에 사용
* 현재는 다양한 프로그래밍 언어에서 내부적으로 지원
* 코드에디터에서도 사용 가능
* /(slashes)안에 정규표현식을 작성



## 2. 그룹, 레인지

### 일반적인 텍스트 검사

```JavaScript
// 'Hi'와 매칭
/Hi/gm

// or 연산자
// 'Hi' 또는 'Hello'와 매칭
/Hi|Hello/gm
```



### 그룹, 레인지

```
| 또는
(  ) 그룹
[ ] 문자셋, 괄호안의 어떤 문자든
[^] 부정 문자셋, 괄호안의 어떤 문자가 아닐 때
(?:) 찾지만 기억하지는 않음
g 글로벌
m 멀티라인
```



### 예시

```
* 'Hi'와 'Hello'를 한 그룹으로 지정
/(Hi|Hello)/gm

* 그룹1: 'Hi' 또는 'Hello'
* 그룹2: 'And'
/(Hi|Hello)|(And)/gm
  
* gr로 시작하고 y로 끝나며, 중간에 e 또는 a가 들어가는 문자열(그룹으로 찾음)
/gr(e|a)y/gm

* 위와 동일하게 찾지만 그루핑을 하지 않음
/gr(?:e|a)y/gm
  
* 위와 동일하게 찾음, 그루핑을 하지 않음
/gr[ea]y/gm

* gr로 시작하고 a에서 f에 속하는 문자를 가지며 y로 끝나는 문자열을 찾음
/gr[a-f]y/gm

* a에서 z, A에서 Z, 0에서 9 까지를 가지는 문자열을 찾음
/[a-zA-Z0-9]/gm

* a에서z, A에서 Z, 0에서 9까지를 제외한 문자열을 찾음
/[^a-zA-Z0-9]/gm
```



# Reference

[[드림코딩 by 엘리]정규표현식, 더이상 미루지 말자 ](https://www.youtube.com/watch?v=t3M6toIflyQ)

