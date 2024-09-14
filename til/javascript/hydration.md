# Hydration

- 정적인 html 페이지에 이벤트를 부착하여 상호작용 가능한 페이지로 만들어 주는 것
- CSR 의 경우, 서버로부터 빈 html 과 js 를 페치 받고, js 를 이용해 DOM 을 생성한다. 상호작용은 대게 dom api 와 같은 client-side api 을 사용해 발생한다. 하지만 SSR 의 경우, 완성된 html 과 js 를 받는 데, js 를 html 에 매칭하는 과정인, hydration 이 필요하다.


## hydration mismath error
- 서버에서 렌더된 html 과 클라이언트 사이드에서 렌더된 최종적인 html 이 서로 같지 않을 때 발생한다. 
- 원인으로는 보통 
    - 부정확한 html tag 중첩
    - browser-only api 들 (e.g. localStorage) 을 사용하는 경우
    - Date() 를 사용하는 경우 
   등이 있다
 
## in React
- 사전에 만들어진 HTML로 그려진 브라우저 DOM 노드 내부에 React 컴포넌트를 렌더링
- `react-dom/server` 과 같이 server api 를 이용하여 html 을 생성할 경우, hydrate 이 필요하다. 
     - 18 버젼 전까지 지원하던 hydrate 가 hydrateRoot 로 바뀌게 됨


[Understanding Hydration in Server-Side Rendered Nuxt Applications](https://medium.com/@susantomandal1998/hydration-54cb4715e4b2#:~:text=Hydration%20mismatch%20often%20occurs%20when,arise%2C%20allowing%20for%20swift%20resolution)
 
[hydration in React](https://medium.com/@gautamkiran123/hydration-in-react-8e8dff384f93)