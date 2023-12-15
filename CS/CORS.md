

#  CORS

CORS는 Cross-Origin Resource Sharing의 약자로, 
웹 페이지에서 로드된 리소스가 다른 도메인에서 온 리소스와 상호 작용할 수 있는 규칙을 정의하는 웹 브라우저 보안 기술입니다. 

동일 출처 정책(Same-Origin Policy)에 따라 브라우저는 웹 페이지의 스크립트가 다른 출처에서 온 리소스에 접근하는 것을 방지합니다. 그러나 이러한 보안 정책으로 인해 서로 다른 도메인 간의 통신이 필요한 경우가 있습니다. 이 때 CORS가 사용됩니다.

일반적으로, 웹 브라우저에서 다른 도메인으로 HTTP 요청을 보내면 브라우저는 사전 요청(pre-flight request)을 사용하여 해당 도메인의 서버에 요청 권한이 있는지 확인합니다. 

사전 요청은 실제 요청 전에 OPTIONS 메서드를 사용하여 브라우저와 서버 간에 헤더 정보 등을 교환하여 권한을 확인하는 과정을 포함합니다.


## Same-Origin Policy (SOP):
브라우저는 일반적으로 같은 출처에서 로드된 문서에 대한 요청만을 허용합니다. 
출처란 프로토콜 (http, https), 호스트 (도메인), 포트 번호로 구성된 URL의 일부를 나타냅니다.
이는 보안을 강화하기 위한 정책으로, 브라우저에서 실행되는 스크립트로 인해 다른 출처의 리소스에 접근하는 것을 방지합니다.



## CORS는 다음과 같은 헤더를 사용하여 제어됩니다:

Origin: 현재 페이지의 출처(Origin)를 나타냅니다.

Access-Control-Allow-Origin: 허용된 출처를 나타냅니다. 이 헤더가 없거나 '*'이면 모든 출처가 허용됩니다.
Access-Control-Allow-Methods: 서버가 허용하는 HTTP 메서드를 나타냅니다.
Access-Control-Allow-Headers: 허용된 요청 헤더를 나타냅니다.
Access-Control-Allow-Credentials: 자격 증명을 사용할 수 있는지 여부를 나타냅니다.
Access-Control-Expose-Headers: 브라우저에게 노출할 수 있는 헤더를 나타냅니다.

CORS는 주로 웹 애플리케이션에서 외부 API와 통신하거나, 폰트, 이미지, 스크립트 등을 로드할 때 사용됩니다. 
서버 측에서 CORS 설정을 올바르게 구성하면 브라우저에서 자원에 안전하게 접근할 수 있습니다.


## CORS 동작 단계

 * Preflight Request (사전 요청):

특정 조건에 해당하는 경우, 브라우저는 사전 요청을 보냅니다.
사전 요청은 실제 요청 이전에 서버에게 허용 여부를 확인하는 역할을 합니다.
OPTIONS 메서드를 사용하며, Access-Control-Request-* 헤더를 통해 실제 요청에서 사용될 헤더나 메서드 등을 미리 확인합니다.


 * 서버의 응답:

서버는 요청에 대한 응답으로 Access-Control-Allow-Origin 헤더를 반환하여 요청을 허용하는 출처를 명시합니다.
다양한 설정을 위해 Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials 등의 헤더도 사용될 수 있습니다.


 * 실제 요청:

사전 요청이 성공적으로 완료되면, 브라우저는 실제 요청을 보냅니다.
서버는 요청을 받고, Access-Control-Allow-Origin 헤더를 통해 출처를 확인하고 응답합니다.

브라우저의 OPTIONS 요청(pre-flight request) 예시

```
OPTIONS /api/data HTTP/1.1
Host: example.com
Origin: https://example-origin.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type

HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example-origin.com
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: Content-Type
```




## chrome extension의 background는 cors 정책을 적용받지 않는다?

크롬 확장 프로그램에서 CORS 정책을 우회할 수 있는 이유는 
크롬 확장 프로그램이 Content Security Policy (CSP) 및 CORS 정책에 대해 보다 유연한 권한을 가지기 때문입니다.

일반적으로, 브라우저에서 웹페이지가 다른 도메인에 있는 리소스를 요청하면 브라우저는 Same-Origin Policy와 CORS를 적용하여 보안을 강화합니다.
이는 스크립트에서 다른 도메인의 리소스를 로드하려고 할 때 제한을 두는 것을 의미합니다.

그러나 크롬 확장 프로그램은 웹페이지와는 다르게 일반적으로 Content Security Policy나 CORS에 더 느슨한 규칙을 적용합니다. 
확장 프로그램은 사용자의 브라우저 환경 내에서 실행되기 때문에 일반적인 웹페이지의 보안 제한을 완화할 필요가 있습니다.

이것은 확장 프로그램이 특정 도메인으로부터 자원을 가져오는 데 더 유연하게 접근할 수 있게 해주며, 
따라서 CORS 정책을 우회하여 다른 도메인의 리소스에 액세스할 수 있게 됩니다.

다만, 이러한 특권을 남용하면 보안상의 이슈가 발생할 수 있으므로 신중하게 다루어져야 합니다. 
적절한 보안 조치를 취하지 않으면 사용자의 개인 정보 등이 유출될 수 있는 위험이 있습니다.


**단, host_permission에 fetch 요청을 할 도메인을 명시해주어야 합니다.**



