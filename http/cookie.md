# Cookie

- HTTP 쿠키 (웹 쿠키, 브라우저 쿠키) 라고 불림. 웹 사이트와 마찬가지로 HTTP 프로토콜을 사용해 전송된다.
- 서버 가 생성하여, 클라이언트 의 웹 브라우저에 전송하는 작은 데이터 조각이다
- 브라우저 는 쿠키를 저장해 뒀다가, 동일한 서버에 재 요청 시 저장된 데이터를 함께 전송한다.

## 속성

![](../assets/images/cookie-properties.png)

### Domain

- 쿠키 의 스코프를 지정한다. (어느 도메인에서 유효한지) 이 값은 쿠키가 전송하게 될 호스트 를 명시한다. 도메인이 명시되면, 서브 도메인은 자동적으로 포함된다.
- 만일 써드 파티 쿠키, 즉 도메인이 서로 다른 웹사이트 에서 사용하고 싶다면, 이 값을 지정하면 안된다?

## First-Party (퍼스트 파티 쿠키)

- 쿠키 의 Domain 속성값 과 현재 접속하고 있는 웹사이트의 도메인 이 같은 경우.
- 설정된 도메인에서만 유효하다.
- 예제

  - cool-app.com 이라는 도메인에서 날린 요청의 응답에 쿠키 가 담겨있다. 그 쿠키의 Domain 값이 coo-app.com 혹은 (api.cool-app.com, api2.cool-app.com ...) 이다. 그렇다면 이 쿠키는 퍼스트 파티 쿠키이다.

## Third-Party (써드 파티 쿠키)

- 예제

  - cool-app.com 이라는 도메인에서 날린 요청의 응답에 쿠키 가 담겨있다. 그 쿠키의 Domain 값이 some-add.com 이다. 그렇다면 이 쿠키는 써드 파티 쿠키이다.

> 여러분은 seob.dev에 접속한 상태입니다. 만약 seob.dev에서 example.com이 제공하는 이미지인 example.com/image.png를 사용하고 있다고 가정해볼까요? 이 경우 사용자는 seob.dev에 접속해 있지만 브라우저에서는 example.com/image.png로 요청을 보낼 것 입니다. 아래와 같은 HTML 코드로 나타낼 수 있을 것 같네요. 이 때 사용자가 example.com에 대한 쿠키를 가지고 있다면, 해당 쿠키가 example.com을 운영하는 서버로 같이 전송됩니다. 이 때 전송되는 쿠키를 서드 파티 쿠키라고 부릅니다. 그러니까, 서드 파티 쿠키는 사용자가 접속한 페이지와 다른 도메인으로 전송하는 쿠키를 말합니다. Referer 헤더와 쿠키에 설정된 도메인이 다른 쿠키라고도 말할 수 있겠네요. 그렇기 때문에 사용자가 seob.dev에 걸려있는 example.com 링크를 클릭한 경우에 전송되는 쿠키도 서드 파티 쿠키로 취급됩니다. 이 때 Referer는 seob.dev이니까요.

Reference

- https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies#%EB%B3%B4%EC%95%88

- https://www.youtube.com/watch?v=VOmIplFAGeg
