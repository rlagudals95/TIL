## Promise_Generator

Promise와 Generator는 JavaScript에서 비동기 프로그래밍 및 제어 흐름 관리에 사용되는 두 가지 주요 개념입니다.


### Promise:
Promise는 비동기 작업의 완료 또는 실패와 같은 비동기 작업의 최종 결과를 나타내는 객체입니다. Promise는 세 가지 상태를 가질 수 있습니다.

 * Pending(대기): 비동기 작업이 완료되지 않은 상태.
 * Fulfilled(이행): 비동기 작업이 성공적으로 완료된 상태.
 * Rejected(거부): 비동기 작업이 실패한 상태.
 * Promise의 주요 메서드는 then(), catch(), finally() 입니다.


**Promise then 구조**

```javascript
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  if (/* 작업 성공 조건 */) {
    resolve('성공 결과');
  } else {
    reject('실패 결과');
  }
});

// Promise then 구조
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('완료'));

// Async/Await 구조:
async function exampleAsyncFunction() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('완료');
  }
}

exampleAsyncFunction();
```

 * then: then은 Promise 객체에서 비동기 코드를 다루는 기본적인 방법 중 하나입니다. Promises는 ES6(ES2015)에서 도입되었으며, 
비동기 코드의 순서를 더 효과적으로 관리하기 위해 사용되었습니다.
   * 기존의 Promise 기반 코드나 라이브러리를 사용할 때, 또는 코드가 복잡하지 않을 때 주로 사용됩니다.
   * 연속적인 비동기 작업의 순서를 나타낼 때도 적합합니다.

 * async/await: async와 await는 ES2017(ES8)에서 도입되었습니다. 
이들은 코드를 더 읽기 쉽게 만들고, 비동기 코드의 작성을 동기 코드처럼 만들기 위해 추가되었습니다.
   * 코드의 가독성을 향상시키고, 동기 코드처럼 비동기 코드를 작성하고자 할 때 사용됩니다.
   * 에러 처리를 더 직관적으로 하고 싶을 때 유용합니다



### Generator:
Generator는 함수의 실행을 중간에 일시 중지하고 재개할 수 있는 특별한 유형의 함수입니다. 
function* 키워드로 정의되며, 함수 내에서 yield 키워드를 사용하여 값을 반환하고 실행을 일시 중지합니다.

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

Generator는 비동기 코드의 순서를 쉽게 관리하고 복잡한 비동기 로직을 간단하게 만드는 데 사용될 수 있습니다. 
Generator를 활용하면 비동기 코드의 가독성을 향상시킬 수 있습니다.

```javascript
function* asyncGenerator() {
  try {
    const result1 = yield someAsyncOperation1();
    console.log(result1);
    const result2 = yield someAsyncOperation2();
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
}

// Generator 실행
const generator = asyncGenerator();
const promise1 = generator.next().value;
promise1.then(result => generator.next(result).value)
       .then(result => generator.next(result));
```
