# BuilderPattern

**빌더 패턴이란 복합 객체의 생성 과정과 표현 방법을 분리하여 동일한 생성 절차에 서로 다른 표현 결과를 만들 수 있게 하는 패턴이다.**

1. 객체클래스와 빌더클래스를 분리하는 방법  
2. 객체 클래스 내부에 빌더 클래스를 포함할 수 있는 방법



 * House.ts

```typescript
class House {
   name: string;
   address: number;
	 contructor(houseBuilder: HouseBuilder) {
      this.name = houseBuilder._name;
			this.address = houseBuilder._address;
   }
}
``` 

 * HouseBuilder.ts  

```typescript
class HouseBuilder {
   _name: string;
   _address: number;
  setName(arg: string) {
    this.name = arg;
    return this;
  }
  setAddress(arg: number) {Ï
    this.address = arg;
    return this;
  }
  build() {
    return new House(this);
  }
}
new HouseBuilder().setName("이름").setAddress(123).build();
```

## Builder pattern의 장점(생성자 항목이 많을경우 가지고 있는 property가 많을경우)  


1. 코드 가독성이 올라간다
생성자에 들어갈 파라미터의 순서나 항목을 알것없이 호출코드만 봐도 어떤 객체를 만드는지 알수 있다.
  
```
-> as is
new House("이름",123);
-> to be
new HouseBuilder().setName("이름").setAddress(123).build();
```

2. 코드 작성할때도 편하다.  

```
-> as is (House 클래스에 관련한수가 다짜져 있다고 가정)
const house = new House();
house.setName("이름");
house.setAddress(123);
-> to be
const house = new HouseBuilder().setName("이름").setAddress(123).build();
```

3. 객체의 생성과 표현 관심사 분리가 가능하다.
앞서 설명한 빌더 패턴의 목적과도 같다. 무슨 말인지는 아래 예시를 한번 보도록 하자.  

```
-> as is
class House {
  name: string;
  address: number;
  constructor() {
    this.name = "";
    this.address = -1;
  }
  setName(arg: string) {
    this.name = arg;
    return this;
  }
  setAddress(arg: number) {
    this.address = arg;
    return this;
  }
  getNameAndAddress() {
    return `${this.name}_${this.address}`;
  }
  getAddressPlusString(arg: string) {
    return arg + this.address;
  }
}
-> to be
class House {
  name: string;
  address: number;
  contructor(houseBuilder: HouseBuilder) {
      this.name = houseBuilder._name;
			this.address = houseBuilder._address;
   }
  getNameAndAddress() {
    return `${this.name}_${this.address}`;
  }
  getAddressPlusString(arg: string) {
    return arg + this.address;
  }
}
class HouseBuilder {
   _name: string;
   _address: number;
  setName(arg: string) {
    this._name = arg;
    return this;
  }
  setAddress(arg: number) {Ï
    this._address = arg;
    return this;
  }
  build() {
    return new House(this);
  }
}
```


### 개선된 코드  

```
interface ConstructorType<T> {
  new (): T;
}
class BuilderCommon<T> {
  public object: T;
  constructor(ctor: ConstructorType<T>) {
    this.object = new ctor();
  }
  build(): T {
    return this.object;
  }
}
class House {
  name: string;
  address: number;
  getNameAndAddress() {
    return `${this.name}_${this.address}`;
  }
}
class HouseBuilder extends BuilderCommon<House> {
  constructor() {
    super(House);
  }
  setName(arg: string) {
    this.object.name = arg;
    return this;
  }
  setAddress(arg: number) {
    this.object.address = arg;
    return this;
  }
}

```

 * 모든 빌더클래스에 공통적으로 들어갈 부분은 하나의 클래스로 뺀다 -> 그를 상속하면 반복되는 코드를 줄일수 있지 않을가 생각했다. 
 * generic 을 사용해서 클래스의 생성자에서 초기화를 수행할때, 
new T() 방식으로 선언을 하게되면 generic 타입인지라 new 키워드를 지원하지않는 다른 타입이 오게될 수 있으므로, 
타입스크립트에서 에러를 내게 된다. 

이 문제를 해결하기 위해서 실제 BuilderCommon 클래스내에 
new 키워드가 존재하지 않는 객체만 파라미터로 받을수 있게 추가 타입을 정의해서 해결하였다.




### Reference  
[https://velog.io/@hong-brother/TypeScript%EC%97%90%EC%84%9C-Builder%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90%EC%9E%91%EC%84%B1%EC%A4%91](https://siosio3103.medium.com/typescript-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-0-builder-%EB%B9%8C%EB%8D%94-%ED%8C%A8%ED%84%B4-90552ae0b763)https://siosio3103.medium.com/typescript-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-0-builder-%EB%B9%8C%EB%8D%94-%ED%8C%A8%ED%84%B4-90552ae0b763

