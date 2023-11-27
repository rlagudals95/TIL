# Refactoring - 리팩터링 원칙(3)

**본 내용은 마틴 파울러의 Refactoring 2판을 토대로 작성되었습니다.**



## 리팩터링 원칙

### 리팩터링, 아키텍처

* 이전에는 코딩을 시작하기 전에 소프트웨어 설계와 아키텍처를 어느정도 또는 거의 완료를 해야한다고 알려졌음
* 리팩터링은 수년 동안 운영되던 소프트웨어라도 아키텍처를 대폭 변경 가능
* 탄탄한 테스트가 뒷받침되어야 함
* 리팩터링이 아키텍처에 미치는 실질적인 효과는 요구사항 변화에 자연스럽게 대응하도록 코드 베이스를 잘 설계해줌
* 아키텍처를 확정지으려 할 때의 문제는 소프트웨어 요구사항을 사전에 모두 파악해야 함
  * 실현하기 어려운 목표
  * 소프트웨어를 실제 사용해보고 업무에 미치는 영향을 직접 확인하고 나서야 원하는 바를 알 수 있음
* 유연성 매커니즘
  * 향후 변경에 유연하게 대처할 수 있는 것
  * 다양한 예상 시나리오에 대응하기 위한 매개변수 추가
  * 당장의 쓰임에 비해 함수가 너무 복잡해짐
  * 오히려 유연성 매커니즘이 변화에 대응하는 능력을 떨어뜨릴 때가 대부분



### 애그니(YAGNI)

* You aren't going to need it
* **리팩터링을 활용하여 그저 현재까지 파악한 요구사항만을 해결하는 소프트웨어를 구축**
  * 진행하며, 사용자의 요구사항을 더 잘 이해하게 되면 아키텍처도 그에 맞게 리팩터링해서 바꾸기
  * 소프트웨어의 복잡도에 지장을 주지 않는 메커니즘은 마음껏 추가
  * 복잡도를 높일 수 있는 유연성 메커니즘은 반드시 검증을 거친 후 추가
* 간결한 설계(SImple Design)
* 점진적 설계(Incremental Design)
* 선제적인 아키텍처에 소홀해도 된다는 뜻은 아님
* 진화형 아키텍처(Evolutionary Architecture)의 발전 계기
  * 아케틱처 관련 결정을 시간을 두고 반복해 내릴 수 있다는 장점을 활용하는 패턴과 실천법 추구



### 리팩터링과 소프트웨어 개발 프로세스

* XP의 두드러진 특징
  * 지속적 통합
  * 자가 테스트 코드
  * 리팩터링
* 자가 테스트 코드 + 리팩터링 = **테스트 주도 개발(TDD, Test Driven Development)**
* XP는 애자일 소프트웨어 방법론 중 하나
* 자가 테스트 코드, 지속적 통합, 리팩터링이라는 세 기법은 서로 강력한 상승효과를 발휘
  * 요구사항 변화에 재빠르게 대응
  * 안정적인 선순환 구조를 코드베이스에 심음
* 리팩터링과 YAGNI는 서로 긍정적인 영향을 줌
  * 리팩터링이 YAGNI의 토대
  * YAGNI로 인해 리팩터링을 더욱 쉽게 할 수 있음
* 지속적 배포
  * 소프트웨어를 언제든 릴리스할 수 있는 상태로 유지
  * 웹사이트를 개발하는 조직은 하루에도 여러 차례 릴리스 가능
  * 위험요소를 줄이고, 비즈니스 요구에 맞춰 릴리스 일정 계획