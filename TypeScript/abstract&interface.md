


## 추상 클래스

추상 클래스는 추상 메소드를 가질 수 있는 클래스 입니다. 
추상 메소드는 내용이 없이 메소드 이름과 타입만이 선언된 메소드를 말하고 선언시에 abstract 키워드를 사용합니다. 
추상 클래스는 자신의 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 합니다. 
**또한 추상 클래스로는 객체 인스턴스를 생성할 수 없고 상속용으로만 가능합니다.**
  
```typescript
abstract class Animal {
  private _age: number;
  
  constructor (theAge: number) {
    this._age = theAge;
  }
  
  get age() {
    return this._age;
  }
  
  set age(theAge: number) {
    this._age = theAge;
  }
  
  // 추상 함수
  public abstract makeSound(): void;
}
```



## 인터페이스
타입스크립트는 객체의 타입을 정의할 수 있는 interface라는 키워드를 제공합니다. 
인터페이스는 여러가지 타입을 갖는 프로퍼티로 이뤄진 새로운 타입을 정의하는 것과 유사합니다.
인터페이스는 프로퍼티와 메소드를 가질 수 있는 점에서 클래스와 유사하지만 
**직접 인스턴스를 생성할 수 없고 모든 메소드는 추상메소드입니다.**  


```typescript
  interface 인터페이스 이름{
      property name[?]: property type[,...]
  }
```

인터페이스는 객체의 타입을 정의하는 것이 목적이기 때문에, 
{}로 프로퍼티이름과 프로퍼티 타입을 나열하는 형태로 사용합니다.

```typescript
  interface Todolist {
    id: number;
    title: string;
    done: boolean;
  }

  let todo: Todolist;

  todo = { id: 1, title: 'typescript 학습하기', done: false };
```


## 차이점  
인터페이스(interface) 와 추상 클래스(abstract class)의 가장 큰 차이점은 기본 구현을 제공하는 능력에 있지 않을까 생각한다.
인터페이스는 클래스에 공통된 메소드와 속성의 시그니처를 정의하는데 사용되지만 구현 세부 사항을 가지지는 않는다. 
반면 추상 클래스는 기본적인 구현을 제공할 수 있으며 필요한 경우 하위 클래스에서 이를 재정의 하거나 추가 구현을 제공할 수 있다. 따라서 추상 클래스는 다음과 같은 상황에 유용할 수 있다.

공통된 기능을 가진 클래스들의 기본 구현을 제공하고, 상속을 통해 하위 클래스에서 특정 동작을 재정의 하거나 확장할 수 있다.
추상 클래스를 사용하면 코드의 중복을 줄이고 상속을 사용하여 계층적인 클래스 구조를 만들 수 있다. 
이를 통해 관련된 클래스들을 논리적으로 그룹화하여 코드의 가독성과 유지 보수성을 높일 수 있다.
정리하면, 

**인터페이스는 여러 개의 인터페이스를 implements 하여 다양한 기능을 조합할 수 있지만 구현을 가지지는 않는다. 
반면 추상 클래스는 구체적인 구현 세부 사항을 제공할 수 있고 계층적인 클래스 구조를 만들 수 있지만 단일 상속만 가능하다.
이에더해 추상클래스는 제어 접근자를 통해 메소드의 용도를 더 명시적으로 선언할 수 있다.**





## Reference
https://pannchat.tistory.com/entry/Typescript-클래스-추상클래스-인터페이스-그리고-차이 [박지원:티스토리]