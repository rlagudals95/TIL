## 맵과 셋

* 객체 – 키가 있는 컬렉션을 저장함
* 배열 – 순서가 있는 컬렉션을 저장함

하지만 현실 세계를 반영하기엔 이 두 자료구조 만으론 부족해서 맵(Map)과 셋(Set)이 등장하게 되었습니다.


### Map
맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사합니다. 다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있습니다.

맵에는 다음과 같은 주요 메서드와 프로퍼티가 있습니다.

* new Map() – 맵을 만듭니다.
* map.set(key, value) – key를 이용해 value를 저장합니다.
* map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
* map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
* map.delete(key) – key에 해당하는 값을 삭제합니다.
* map.clear() – 맵 안의 모든 요소를 제거합니다.
* map.size – 요소의 개수를 반환합니다.

예시

```
  let map = new Map();
  
  map.set('1', 'str1');   // 문자형 키
  map.set(1, 'num1');     // 숫자형 키
  map.set(true, 'bool1'); // 불린형 키
  
  // 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
  // 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
  alert( map.get(1)   ); // 'num1'
  alert( map.get('1') ); // 'str1'
  
  alert( map.size ); // 3
```

**맵은 객체와 달리 키를 문자형으로 변환하지 않습니다. 키엔 자료형 제약이 없습니다.**


### Set
셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션입니다. 셋에 키가 없는 값이 저장됩니다.

주요 메서드는 다음과 같습니다.

* new Set(iterable) – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
* set.add(value) – 값을 추가하고 셋 자신을 반환합니다.
* set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
* set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
* set.clear() – 셋을 비웁니다.
* set.size – 셋에 몇 개의 값이 있는지 세줍니다.

**셋 내에 동일한 값(value)이 있다면 set.add(value)을 아무리 많이 호출하더라도 아무런 반응이 없을 겁니다.**
셋 내의 값에 중복이 없는 이유가 바로 이 때문이죠.
방문자 방명록을 만든다고 가정해 봅시다. 
한 방문자가 여러 번 방문해도 방문자를 중복해서 기록하지 않겠다고 결정 내린 상황입니다. 즉, 한 방문자는 '단 한 번만 기록’되어야 합니다.

이때 적합한 자료구조가 바로 셋입니다.

예시
```
  let set = new Set();
  
  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };
  
  // 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);
  
  // 셋에는 유일무이한 값만 저장됩니다.
  alert( set.size ); // 3
  
  for (let user of set) {
    alert(user.name); // // John, Pete, Mary 순으로 출력됩니다.
  }
```


## 요약
맵은 키가 있는 값이 저장된 컬렉션입니다.

주요 메서드와 프로퍼티:

* new Map([iterable]) – 맵을 만듭니다. [key,value]쌍이 있는 iterable(예: 배열)을 선택적으로 넘길 수 있는데, 이때 넘긴 이터러블 객체는 맵 초기화에 사용됩니다.
* map.set(key, value) – 키를 이용해 값을 저장합니다.
* map.get(key) – 키에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
* map.has(key) – 키가 있으면 true, 없으면 false를 반환합니다.
* map.delete(key) – 키에 해당하는 값을 삭제합니다.
* map.clear() – 맵 안의 모든 요소를 제거합니다.
* map.size – 요소의 개수를 반환합니다.

### 일반적인 객체와의 차이점:

키의 타입에 제약이 없습니다. 객체도 키가 될 수 있습니다.
size 프로퍼티 등의 유용한 메서드나 프로퍼티가 있습니다.
셋은 중복이 없는 값을 저장할 때 쓰이는 컬렉션입니다.

주요 메서드와 프로퍼티:

* new Set([iterable]) – 셋을 만듭니다. iterable 객체를 선택적으로 전달받을 수 있는데(대개 배열을 전달받음), 이터러블 객체 안의 요소는 셋을 초기화하는데 쓰입니다.
* set.add(value) – 값을 추가하고 셋 자신을 반환합니다. 셋 내에 이미 value가 있는 경우 아무런 작업을 하지 않습니다.
* set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
* set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
* set.clear() – 셋을 비웁니다.
* set.size – 셋에 몇 개의 값이 있는지 세줍니다.

맵과 셋에 반복 작업을 할 땐, 해당 컬렉션에 요소나 값을 추가한 순서대로 반복 작업이 수행됩니다. 
따라서 이 두 컬렉션은 정렬이 되어있지 않다고 할 수 없습니다. 그렇지만 컬렉션 내 요소나 값을 재 정렬하거나 (배열에서 인덱스를 이용해 요소를 가져오는 것처럼) 숫자를 이용해 특정 요소나 값을 가지고 오는 것은 불가능합니다.






