## 인코딩이란?

base64 인코딩에 대해 알아보기전에 먼저 인코딩이란게 무엇인지 간략하게 알아보자. 
**인코딩(encoding)은 정보의 형태나 형식을 표준화, 보안, 처리 속도 향상, 저장 공간 절약 등을 위해서 
다른 형태나 형식으로 변환하는 처리 혹은 그 처리 방식을 말한다.**
동영상이나 이미지영역에서도 많이 사용되는 용어지만 우리는 
Binary Data를 Text로 바꿔주는 Base64 인코딩에 대해서 알아봐야하기 때문에 이하는 생략하겠다.



## Base64 인코딩
Base64란 Binary Data를 Text로 바꾸는 Encoding(binary-to-text encoding schemes)의 하나로써 
**Binary Data를 Character set에 영향을 받지 않는 공통 ASCII 영역의 문자로만 이루어진 문자열로 바꾸는 Encoding이다.**



**Base64를 글자 그대로 직역하면 64진법이라는 뜻이다.**
64진법은 컴퓨터한테 특별한데 그 이유는 64가 2의 제곱수 64=2^6이며 2의 제곱수에 
기반한 진법 중 화면에 표시되는 ASCII 문자들로 표시할 수 있는 가장 큰 진법이기 때문이다. 
(ASCII에는 제어문자가 다수 포함되어 있기 때문에 화면에 표시되는 ASCII 문자는 128개가 되지 않는다.)

핵심은 Base64 Encoding은 Binary Data를 Text로 변경하는 Encoding이다.

변경하는 방식을 간략하게 설명하면 Binary Data를 6 bit 씩 자른 뒤 6 bit에 해당하는 문자를 아래 Base64 색인표에서 찾아 치환한다. 
(실제로는 Padding을 더해주는 과정이 추가된다.)  

![image](https://github.com/rlagudals95/TIL/assets/76252074/a14e006f-691e-481c-b753-14b5446137df)
  


## Why Base64??
Base64 Encoding을 하게되면 전송해야 될 데이터의 양도 약 33% 정도 늘어난다. 
6bit당 2bit의 Overhead가 발생하기 때문이다. http://www.base64encode.org/에서 직접 테스트해보면 어렵지 않게 확인 할 수 있다.
Encoding전 대비 33%나 데이터의 크기가 증가하고, Encoding과 Decoding에 추가 CPU 연산까지 필요한데 우리는 왜 Base64 Encoding을 하는가?

문자를 전송하기 위해 설계된 Media(Email, HTML)를 이용해 플랫폼 독립적으로 Binary Data(이미지나 오디오)를 전송 할 필요가 있을 때, 
ASCII로 Encoding하여 전송하게 되면 여러가지 문제가 발생할 수 있다. 

대표적인 문제는

ASCII는 7 bits Encoding인데 나머지 1bit를 처리하는 방식이 시스템 별로 상이하다.
일부 제어문자 (e.g. Line ending)의 경우 시스템 별로 다른 코드값을 갖는다.
위와 같은 문제로 ASCII는 시스템간 데이터를 전달하기에 안전하지가 않다. 
**Base64는 ASCII 중 제어문자와 일부 특수문자를 제외한 64개의 안전한 출력 문자만 사용한다.**
(* 안전한 출력 문자는 문자 코드에 영향을 받지 않는 공통 ASCII를 의미한다).  



**즉, “Base64는 HTML 또는 Email과 같이 문자를 위한 Media에 Binary Data를 포함해야 될 필요가 있을 때, 
포함된 Binary Data가 시스템 독립적으로 동일하게 전송 또는 저장되는걸 보장하기 위해 사용한다” 라고 정리 할 수 있을 것 같다.**   


### Reference  
https://effectivesquid.tistory.com/entry/Base64-%EC%9D%B8%EC%BD%94%EB%94%A9%EC%9D%B4%EB%9E%80



