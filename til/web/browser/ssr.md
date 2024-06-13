# Server Side Rendering

- 서버 에서 렌더링을 준비
- 요청 할 때마다, 서버에서는 요청 페이지에 해당하는 html 을 생성.
  - 사전에 미리 html 을 모두 생성해 놓는 SSG 와 이 지점에서 갈림.

## 프로세스

1. 사용자가 웹에 접속
2. 브라우저가 서버에 리소스 요청
3. 서버는 초기 콘텐츠가 로딩된 html 에 js, css 를 모두 포함해 응답
4. 사용자는 정적인 페이지를 볼 수 있음 (인터랙션 불가)
5. js 를 실행해, 이벤트리스너를 할당, 인터랙티브한 페이지 제공

## 장점

- 초기 구동 속도가 빠르다.

  - 정확히 말하면 FCP (First Contentful Paint)이 빠르다. 이유는, 서버가 초기 콘텐츠가 로딩된 상태인 html 을 응답하기 때문에, 사용자는 웹에 접속하고 얼마 지나지 않아 정적인 페이지를 먼저 확인할 수 있다.

- SEO 에 유리하다.

  - 모든 데이터가 이미 html 에 담겨진 채로 브라우저에 전달되기 때문에, 웹 크롤러가 html 에서 색인을 만들어내기 쉬움.

## 단점

- 사용자가 페이지를 보는 시점과, 사용할 수 있는 시점이 다르다
  - 다른 표현으로 TBT (Total Blocking Time) 이 발생한다고도 한다. 이는 초기 콘텐츠가 로딩된 Html 을 사용자가 받아 보고, 이후 js 가 실행되어 인터랙티브한 페이지가 되기 전까지의 시간 이 발생하는 것을 의미한다. (FCP 에서 TTI 까지의 시간)

## 언제 사용 하면 좋을 까?

- 예를 들어, 회사 홈페이지이기 때문에 검색 포털에 상위 노출되어야 하고, 자주 바뀌지 않는 페이지 라면 SSR 이 적합할 수 있음.

Reference

- [[10분 테코톡] 🎨 신세한탄의 CSR&SSR
  ](https://www.youtube.com/watch?v=YuqB8D6eCKE)