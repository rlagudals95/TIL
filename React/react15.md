# React로 사고하기

* React의 관점에서 앱을 설계하는 방식을 알아보기



## 1. UI를 컴포넌트 계층 구조로 나누기

* 디자이너와 함께 일한다면, Phtoshop 레이어 이름이 React 컴포넌트의 이름이 될 수 있음
* **단일 책임 원칙**
  * 하나의 컴포넌트는 한 가지 일을 하는 것이 이상적
  * 하나의 컴포넌트가 커지게 된다면, 이보다 작은 하위 컴포넌트로 분리되어야 함
* 데이터 모델이 적절하게 만들어졌다면, UI가 잘 연결됨
  * UI와 데이터 모델이 같은 인포메이션 아키텍처를 가지는 경향이 있기 때문
  * 각 컴포넌트가 데이터 모델의 한조각을 나타내도록 분리



## 2. React로 정적인 버전 만들기

* 컴포넌트 계층구조를 만든 이후, 앱을 실제로 구현
* 데이터 모델을 가지고 UI 렌더링을 하기
  * 아무 동작도 없는 버전
* 다른 컴포넌트를 재사용하는 컴포넌트를 만들기
  * props를 이용해 데이터를 전달
* 정적 버전을 만들 때는 **state를 사용하지 말것**
  * 오직 상호작용을 위해 사용
  * 시간이 지남에 따라 데이터가 바뀌는 것에 사용
* 앱을 만들 때 하향식 또는 상향식으로 만들 수 있음
  * 간단한 경우에서는 상향식으로 만드는 것이 쉬움
  * 프로젝트가 커지면 상향식으로 만드는 것이 쉬움
* 이 단계가 끝나면 재사용 가능한 컴포넌트들의 라이브러리를 가질 수 있게 됨
* React의 단방향 데이터 흐름은 모든 것을 모듈화하고 빠르게 함



## 3. UI State에 대한 최소한의 표현 찾아내기

* UI 상호작용은 기반 데이터 모델을 변경할 수 있는 방법이 있어야 함
  * React에서는 state를 통해 변경
* 애플리케이션에서 필요로하는 변경가능한 state의 최소 집합을 생각해야 함
* **중복배제원칙**
  * 애플리케이션이 필요로하는 가장 최소한의 state를 찾고 필요할 때만 계산되도록 함
* state가 아닌 경우
  * 부모로부터 props를 통해 전달
  * 시간이 지나도 변하지 않음
  * 컴포넌트 안의 다른 state와 props를 가지고 계산 가능



## 4. State가 어디에 있어야 할 지 찾기

* 어떤 컴포넌트에서 state를 변경하거나 소유할지 찾아야 함
* 각각의 state에 대해서
  * state를 기반으로 렌더링하는 모든 컴포넌트를 찾기
  * 공통 소유 컴포넌트를 찾기(계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트)
  * 공통 혹은 상위에 있는 컴포넌트가 state를 가져야 함
  * 적절한 컴포넌트가 없으면 state를 소유하는 컴포넌트를 하나 만들어서 추가



## 5. 역방향 데이터 흐름 추가하기

* 계층 구조의 하단의 컴포넌트에서 상위 컴포넌트의 state를 업데이트
* React는 양방향 데이터 바인딩과 비교하면 많은 타이핑이 필요하지만, 데이터 흐름을 명시적으로 만들어 프로그램 동작 파악에 도움을 줌



# Reference

[React 공식 문서](https://ko.reactjs.org/)
