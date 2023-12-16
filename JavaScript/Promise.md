# Promise

설명
Promise는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로, 
비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. 
프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. 다만
 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)을 반환합니다.

Promise는 다음 중 하나의 상태를 가집니다.

 * 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
 * 이행(fulfilled): 연산이 성공적으로 완료됨.
 * 거부(rejected): 연산이 실패함.

```
export function sendMessage(
  message: ContentMessagePacket,
  timeout = 10000,
): Promise<SendResponseStatus> {
  return new Promise((resolve, reject) => {
    const { type, data } = message;

    const timeoutId = setTimeout(() => {
      reject(new Error('sendMessage: Timeout exceeded'));
    }, timeout);

    try {
      chrome.runtime.sendMessage({ type, data }, (response) => {
        clearTimeout(timeoutId);

        if (chrome.runtime.lastError) {
          reject(new Error(`sendMessage: ${chrome.runtime.lastError.message}`));
        } else {
          resolve(response);
        }
      });
    } catch (error) {
      clearTimeout(timeoutId);
      reject(new Error(`sendMessage: ${error}`));
    }
  });
}
```


![image](https://github.com/rlagudals95/TIL/assets/76252074/238cb266-f956-4468-8721-fc9d82372623)
