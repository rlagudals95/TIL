# [코드잇] 유닉스 커맨드 라인 (2) (2021.2.28)



**본 내용은 해당 [강의](https://www.codeit.kr/courses/unix-command-line) 토대로 작성**



# 디렉토리와 파일

## 01. 경로 확인하고 변경하기

### 디렉토리

* 컴퓨팅에서 파일과 다른 디렉토리의 그룹을 갖고 있는 파일 시스템 안의 존재물
* **틸드(Tilde, ~)** : 현재 사용자의 홈 디렉토리
* **현재 사용자**: 지금 컴퓨터를 사용하고 있는 사용자
* **홈 디렉토리**: 사용자 자신만의 디렉토리
  * 자신이 필요한 것을 자신의 디렉토리에
  * 해당 사용자의 계정 이름과 같다
* 부모 디렉토리 (상위 디렉토리): 포함 하고 있는 디렉토리
* 자식 디렉토리 (하위 디렉토리): 포함 되고 있는 디렉토리
* 디렉토리 == 경로



### pwd 커맨드

* Print the name of Working Directory

`pwd` : 현재 작업중인 디렉토리 출력



### 슬래시 (/)

* 가장 상위에 있는 디렉토리
* 최상위 디렉토리 or 루트 디렉토리
* 모든 디렉토리와 파일은 루트 디렉토리  안에 있다.



### cd 커맨드

* change directory

`cd 이동할 경로`



## 02. 절대 경로와 상대 경로

### 절대 경로

* **루트 디렉토리를 기준**으로 어떤 파일이나 디렉토리가 가지고 있는 **고유한 경로**

> **/users/greedysiru/Pictures**



### 상대 경로

* **나의 현재 위치를 기준**으로 나타낸 경로
* 현재 디렉토리, 부모 디렉토리의 파일을 사용하는 경우 편하다.
* **하이픈(-)**: cd 커맨드에 인자로 사용하면, 이동하기 전의 디렉터리로 돌아간다.
* **dot(.)** : 현재 위치한 디렉토리

> **./Pictures**

* **double dot(..)**: 현재 디렉토리를 포함하는 부모 디렉토리

> **../Pictures**



## 03. 상대 경로의 유용함

* 현재 경로가 루트 디렉토리로부터  멀리 있는 상황에서 그 주변의 경로를 나타내야할 때는 상대 경로를 쓰면 더 쉽게 나타낼 수 있다.
* 프로그램의 호환성을 좋게 할 수 있다.
  * 프로그램의 소스 코드 내에서 사용해야 한다.
  * 다른 환경으로 옮겨졌을 때에도 아무런 문제 없이 실행될 수 있기 때문이다.



## 04. 디렉토리 내부 살펴보기

### ls 커맨드

* 현재 디렉토리 안의 **자식 디렉토리**나 파일들의 **리스트**를 보여줌
* **-l: long listing format**
  * 결과를 긴 리스트 형식으로 보여달라는 의미
  * 디렉토리, 파일크기 등의 자세한 정보
* **-a: all**
  * **숨겨져 있는 자식 디렉토리나 파일을 볼 수 있다.**
* **-al: 옵션 a, l을 합쳐서 실행**



### 숨김 파일, 디렉토리

> **.디렉토리 이름**
>
> **.파일 이름**

* 기본 ls 커맨드로 조회되지 않는다.
* 수정할 경우가 없는 설정 파일 등



## 05. ls에 인자 주기

* 파일명: 해당 파일의 정보를 알 수 있다.
  *  **옵션 -l**: 자세한 정보
* 디렉토리명: 들어있는 정보들
  *  **-l**: 자세한 정보
  * **-d**: 디렉토리 자체의 정보



## 06. ls -l의 결 과 중에서 알아야할 내용

커맨드 `ls -l` 을 사용하여 결과가 출력 되었을 때 시작되는 글자가

* **d**: 디렉토리
* **하이픈(-)**: 파일
* **c**: 캐릭터 장치 파일
* **b**: 블록 장치 파일
* **s**: 소켓
* **p**: 파이프
* **l**: 심볼릭 링크



## 07. 디렉토리와 파일 만들기

### 디렉토리 만들기

`mkdir 디렉토리명`: make directory

* 경로를 입력하여 디렉토리를 만들 수 있다.



### 파일 만들기

`touch 파일명`



## 08. 디렉토리와 파일 옮기기, 이름 변경

### 옮기기

`mv 파일또는디렉토리 옮길경로`: move

* 디렉토리나 파일을 옮김



### 이름 변경

`mv 파일또는디렉토리 변경이름`



## 09. mv 커맨드의 동작 방식

### 파일을 옮기는 경우

> **mv file DEST**

* DEST가 이미 존재하는 디렉토리
  * 그 디렉토리 안으로 file이 이동
* DEST가
  * file2면 이름이 file2로 변경
  * ../file이면 위치 이동만
  * ../file2이면 위치 이동과 이름 변경을 같이
* **-i**: interactive, 이동하게 되는 디렉토리의 파일을 덮어쓰는 것을 방지



### 디렉토리를 옮기는 경우

> **mv dir DEST**

* DEST가 이미 존재하는 디렉토리
  * 그 디렉토리 안으로 dir가 이동
* DEST가
  * dir2면 이름이 dir2로 변경
  * ../dir이면 위치 이동만
  * ../dir2이면 위치 이동과 이름 변경을 같이
* DEST가 이미 존재하는 파일의 이름인 경우
  * 에러 메시지가 출력



## 10. 디렉토리와 파일 복사-붙여넣기

### 파일 복사 & 붙여넣기

`cp 원본이름또는경로 복사본이름`: copy & paste

* 복사할 파일의 경로를 첫 번째 인자로 입력하여 복사할 수 있다.



### 파일 복사 & 붙여넣기 주의할 점

* 파일을 복사하여 붙여 넣을 때, 복사본 명이 이미 있는 파일명과 겹칠 경우
  * 해당 파일을 **덮어쓰기**한다.
  * **-i**: interactive, 사용자에게 덮어쓰기 확인 받기
  * 문제를 방지하기 위해, -i를 꼭 활용



### 디렉토리 복사 & 붙여넣기

`cp -r 원본디렉토리 복사본이름`

* **-r**: recursive, 재귀적
  * 자신이 자신을 반복적으로 호출
  * 디렉토리를 복사, 붙여넣기할 때 자식 디렉토리 또한 복사, 붙여넣기



## 11. 디렉토리와 파일 삭제 하기

### 파일 삭제하기

`rm 삭제할파일`



### 디렉토리 삭제하기

`rm -r 삭제할디렉토리 `

* **-r**: recursive, 재귀적
  * 디렉토리 삭제 옵션
* **-i**: interactive
  * 사용자에게 확인 받기
  * 디렉토리에 속한 파일들의 삭제 여부를 확인한다.



## 12. 파일 내용 출력하기

### 이어서 출력하기

`cat 파일`: concatenate, 이어 붙이다

* 파일들의 내용을 **이어서 출력**
* 인자로 파일을 여러개 받아 이어서 출력할 수 있다.
* 내용이 **단순할 때**



### 하나씩 출력하기

`less 파일`: 파일을 편한 형태로 볼 수 있다. 

* 한 화면에 **하나**의 파일을 보여준다.
* 위, 아래, space, b 키를 눌러 이동할 수 있다.  
* G: 가장 마지막으로 이동
* g: 가장 처음으로 이동
* q: 터미널로 나가기
* :n 을 눌러 다음 파일로 이동
* :p 을 눌러 이전 파일로 이동



## 13. 파일 내용 간단히 파악하기

* 파일의 **일부 내용**만 볼 수 있는 커맨드



### head

* 파일의 **맨 앞 부분**을 출력
* 처음 10줄을 출력
* **-n**
  * 옵션의 값을 주면 그 만큼의 줄을 출력



### tail

*  파일의 **맨 뒷부분**을 출력
* **-n**
  * 옵션의 값을 주면 그 만큼의 줄을 출력