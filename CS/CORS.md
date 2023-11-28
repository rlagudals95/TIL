

#  CORS

CORS는 Cross-Origin Resource Sharing의 약자로, 웹 페이지에서 로드된 리소스가 다른 도메인에서 온 리소스와 상호 작용할 수 있는 규칙을 정의하는 웹 브라우저 보안 기술입니다. 동일 출처 정책(Same-Origin Policy)에 따라 브라우저는 웹 페이지의 스크립트가 다른 출처에서 온 리소스에 접근하는 것을 방지합니다. 그러나 이러한 보안 정책으로 인해 서로 다른 도메인 간의 통신이 필요한 경우가 있습니다. 이 때 CORS가 사용됩니다.
일반적으로, 웹 브라우저에서 다른 도메인으로 HTTP 요청을 보내면 브라우저는 사전 요청(pre-flight request)을 사용하여 해당 도메인의 서버에 요청 권한이 있는지 확인합니다. 사전 요청은 실제 요청 전에 OPTIONS 메서드를 사용하여 브라우저와 서버 간에 헤더 정보 등을 교환하여 권한을 확인하는 과정을 포함합니다.



## CORS는 다음과 같은 헤더를 사용하여 제어됩니다:

Origin: 현재 페이지의 출처(Origin)를 나타냅니다.

Access-Control-Allow-Origin: 허용된 출처를 나타냅니다. 이 헤더가 없거나 '*'이면 모든 출처가 허용됩니다.
Access-Control-Allow-Methods: 서버가 허용하는 HTTP 메서드를 나타냅니다.
Access-Control-Allow-Headers: 허용된 요청 헤더를 나타냅니다.
Access-Control-Allow-Credentials: 자격 증명을 사용할 수 있는지 여부를 나타냅니다.
Access-Control-Expose-Headers: 브라우저에게 노출할 수 있는 헤더를 나타냅니다.

CORS는 주로 웹 애플리케이션에서 외부 API와 통신하거나, 폰트, 이미지, 스크립트 등을 로드할 때 사용됩니다. 
서버 측에서 CORS 설정을 올바르게 구성하면 브라우저에서 자원에 안전하게 접근할 수 있습니다.

## webworker와 CORS

서비스 워커(Service Worker)나 웹 워커(Web Worker)에서는 CORS (Cross-Origin Resource Sharing) 정책에 영향을 받지 않는 것이 맞습니다. 
이는 다음과 같은 이유로 설명할 수 있습니다:

Cross-Origin Restrictions이 적용되지 않음: 웹 워커는 메인 스레드와 별도의 스레드에서 동작하며, DOM에 직접 액세스하지 않습니다. 따라서 메인 스레드에서 적용되는 Same-Origin Policy (동일 출처 정책)과는 별개로, 웹 워커에서는 이러한 정책이 적용되지 않습니다.

DOM 접근이 없음: 웹 워커는 DOM에 직접적으로 접근하지 않기 때문에, 브라우저의 주 동기화 메커니즘에 영향을 주지 않습니다. 이로 인해 웹 워커에서는 Cross-Origin 제한을 우회하고 다른 도메인으로부터 스크립트를 가져와 실행할 수 있습니다.

CORS 정책의 적용 대상이 아님: CORS 정책은 주로 브라우저에서 실행되는 클라이언트 측 스크립트에 적용되는 정책입니다. 웹 워커는 백그라운드에서 실행되는 스크립트로, 브라우저의 메인 스레드와는 별개로 동작합니다.
