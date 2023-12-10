# SWR

SWR은 vercel에서 제작한, 데이터를 가져오기 위한 모듈입니다.
간단하게 SWR을 어떻게 사용하는 지에 대해 기록하려 합니다.


### 설치
npm i swr 혹은 yarn add swr을 이용해 설치 할수 있습니다.


### useSWR

SWR은 useSWR이란 hook을 이용합니다.

```
  import useSWR from 'swr'
   
  function Profile() {
    const { data, error, isLoading } = useSWR('/api/user', fetcher)
   
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {data.name}!</div>
  }
```

fetcher로 axios를 활용해 헤더를 세팅할 수도 있습니다.

```
  const fetcher = (url, token) =>
      axios
        .get(url, { headers: { Authorization: "Bearer " + token } })
        .then((res) => res.data);
```


### 간단한 기능들

* 기능
**단 한 줄의 코드로 프로젝트 내의 데이터 가져오기 로직을 단순화할 수 있으며, 다음과 같은 모든 놀라운 기능들을 바로 사용할 수도 있습니다.**

 * 빠르고, 가볍고, 재사용 가능한 데이터 가져오기
 * 내장된 캐시 및 요청 중복 제거
 * 실시간 경험
 * 전송 및 프로토콜에 구애받지 않음
 * SSR / ISR / SSG 지원
 * TypeScript 지원
 * React Native

* SWR은 더 나은 경험을 구축할 수 있도록 속도, 정확성, 안정성의 모든 측면을 다룹니다.
 * 빠른 페이지 네비게이션
 * 인터벌 폴링
 * 데이터 의존성
 * 포커스시 재검증
 * 네트워크 회복시 재검증
 * 로컬 뮤테이션(Optimistic UI)
 * 스마트한 에러 재시도
 * 페이지 및 스크롤 위치 복구
 * React Suspense
