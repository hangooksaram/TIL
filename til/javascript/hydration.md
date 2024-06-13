# Hydration

- 정적인 html 페이지에 이벤트를 부착하여 상호작용 가능한 페이지로 만들어 주는 것
- CSR 의 경우, 서버로부터 빈 html 과 js 를 페치 받고, js 를 이용해 DOM 을 생성한다. 상호작용은 대게 dom api 와 같은 client-side api 을 사용해 발생한다. 하지만 SSR 의 경우, 완성된 html 과 js 를 받는 데, js 를 html 에 매칭하는 과정인, hydration 이 필요하다.
