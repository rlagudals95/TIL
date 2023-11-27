# 데브옵스 핸드북(데브옵스 핸드북 소개(1))

**본 내용은 진 킴, 제즈 험블, 패트릭 드부아, 존 윌리스, 『이펙티브 타입스크립트』, 김영기, 김나리 옮김, 에이콘출판주식회사(2018년)를 토대로 작성하였습니다.**



## 데브옵스가 가져온 결과

* 계획된 작업을 프로덕션 환경에 적용할 수 있음
* IT 운영과 내외부의 모든 고객에에 혼란을 주지 않고 작업을 중단시키지 않으면서도 전체적은 가치 흐름을 통해 작업이 흐름이 자연스럽게 이뤄짐
* 팀의 마찰을 줄이면서 개발 생산성을 높일 수 있음
* 성과를 향상 시킬 수 있는 작업 시스템을 만들 수 있음
* 다른 팀에 의존하지 않고 일상 업무와 관련된 전문 기술을 사용할 수 있음
* 소규모 팀이 코드를 신속하고 독립적으로 개발, 테스트, 배포할 수 있는 안전한 작업 시스템 구축할 수 있음
* **조직 구성원 간의 협력을 용이하게 하고 안정적이고 신속하게 고부가가치를 고객에게 전달하여 내외부 고객의 만족도를 높여 시장에서 승리할 수있게 함**



## 애자일과 데브옵스 - IT 제조 혁명

* 린(Lean) 생산 방식 - 제조 혁명
  * 공장의 생산성, 고객 리드타임, 제품 품질과 고객 만족도를 획기적으로 개선하여 시장에서 승리

* 2000년대 - 기술의 진보, 애자일 완칙과 실천 방법의 도입
  * 새로운 기능 개발에 필요한 시간이 수주 ~ 수개월로 줄어듦
  * 프로덕션 환경 배포는 여전히 큰 소요가 있어 치명적 결과 초래

* 2010년대 - 데브옵스의 도입, 새로운 하드웨어와 소프트웨어의 지속적인 상용화
  * 기능 개발에 필요한 시간이 몇 주 내로 줄어듦
  * 프로덕션 환경으로 단 몇 시간 ~ 몇 분 만에 배포

* **데브옵스의 도입은 빠른 시장 수요에 대응할 수 있게하는 원동력**



## 문제점: 조직 어딘가에 개선이 필요하다

### 핵심적이며 만성적인 갈등

* 개발과 운영 사이에 악순환을 일으키는 갈등이 초래하는 가장 최악의 결과
* 요인 중 하나로는 빠르게 변화하는 경쟁 환경에 대응(개발) vs. 고객에게 안정적이고 신뢰할 수 있는 서비스 제공(운영)



### 악순환의 3단계와 IT 의존성

* 1단계: 운영에서 시작
  * 복잡하고 문서화가 잘 되어 있지 않은 취약한 애플리케이션과 인프라에 의해 발생
  * 가장 취약한 산출물이 가장 중요한 경우가 많음
  * **문제를 해결할 것을 이해당사자에게 약속**
* 2단계: 위반한 약속에 대한 보상을 해야할 때
  * 더 크고 엄청난 기능
  * 큰 매출 목표
  * **기술 조직은 지키기 어려운 약속을 수용**하게 됨
  * **또 다른 기술 부채의 발생**
* 3단계: 모든 것이 조금 더 어려워 짐
  * 더 바빠지고, 작업 시간이 더 걸리며, 커뮤니케이션이 느려지는 등
  * 업무가 강력하게 결합 됨
  * 변화를 두려워하게 됨
  * **더 많은 절차가 생기게 되어 정체되고 품질은 계속 낮아지게 됨**
* **이 3단계의 악순환이 반복되며 시장에서 패배하게 됨**
* **생각보다 많은 조직들은 IT에 의존하고 있어 여러 곳에서 악순환이 발생함**
* 이 악순환은 구성원들로하여금 번아웃 상태로 이어지게 함



## 용어 정리

1. 린(Lean) 생산 방식: 일본 도요타사가 독자적으로 개발한 생산 기법
   - 적시에 제품과 부품이 공급되는 JIT(Just-In-TIme) 시스템을 갖춤
   - 재고 비용을 줄이고 종업원들의 적극 참여를 유도
   - 생산 품질을 높이는 혁신적인 방식

# Reference

[[KDI 경제 정보 센터] 린(Lean) 생산 방식과 해외 대규모 건설사업 적용 사례](https://eiec.kdi.re.kr/policy/domesticView.do?ac=0000072671)