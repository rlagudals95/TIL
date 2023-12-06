# NextJS - Routing 방식


## 2. App Router Vs. Page Router

* App Router 서버 중심의 라우팅
  * app 디렉토리를 사용
  * **기본적으로 react server components를 기반으로 구성됨**
  * 서버에서 데이터 가져오기에 맞춰져 있음
  * layout.tsx를 이용해 여러개의 페이지에서 쉽게 공유할 수 있게 해줌
  * 첫 페이지를 제외하고 경로 이동 시 페이지를 다시 렌더링하지 않고 SPA처럼 URL만 업데이트하고 변경된 세그먼트만 렌더링
  * Streaming 방식의 렌더링
    * 기존에는 서버 사이드 렌더링을 할 때, 화면에 보여줄 데이터들을 백엔드 API를 통해 fetch를 해서 가져올 때까지 기다려야 했다.
      이러한 문제를 Streaming을 통해 해결
      
      * 고정적인 레이아웃 부분은 data fetch가 필요 없기 때문에 먼저 렌더링한 뒤 클라이언트로 보냄
      * 다른 부분은 data fetch가 끝나면 그 이후에 별도로 렌더링을 한 뒤 클라이언트 단으로 보내주게 됨
        data fetch가 필요로 한 부분은 가져오기 전까지는 알아서 로딩 상태로 표시가 된다.

        ![image](https://github.com/rlagudals95/TIL/assets/76252074/0009e0f1-0f59-4123-9887-7ba2e1ce9be9)


  * data fetch 하는 방식변경 (getStaticProps와 getServerSideProps => use hook)

  ```
    // app/page.js
    import { use } from 'react';
    
    async function getData() {
      const res = await fetch('...');
      const name: string = await res.json();
      return name;
    }
    
    export default function Page() {
      // This value is fully typed
      // The return value is *not* serialized
      // so you can return Date, Map, Set, etc.
      const name = use(getData());
    
      return '...';
    }
  ```



* ReactServerComponent란?
 * 리액트 서버 컴포넌트를 사용하면 앱은 인프라를 활용해 성능과 전반적인 사용자 경험을 개선할 수 있습니다. 
 * RSC는 최종 번들에 종속되지 않기 때문에 번들 크기가 즉각적으로 개선됩니다. 
 * 서버에 렌더링 되기 때문에 모든 종류의 파싱, 포맷팅 또는 컴포넌트 라이브러리가 서버에 남게 됩니다. 
 * 동기적인 특성 덕분에 서버 컴포넌트는 클라이언트로 스트리밍됩니다. 


# Reference

https://vercel.com/templates/next.js/app-directory



